
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { saveAs } from 'file-saver';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Campaign } from '@/lib/campaigns-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Download, FileText, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';
import { useI18n } from '@/context/I18nContext';

type LanguageKey = 'english' | 'assamese' | 'bengali' | 'bodo' | 'manipuri' | 'khasi';
const languages: { key: LanguageKey; name: string }[] = [
  { key: 'english', name: 'English' },
  { key: 'assamese', name: 'Assamese' },
  { key: 'bengali', name: 'Bengali' },
  { key: 'bodo', name: 'Bodo' },
  { key: 'manipuri', name: 'Manipuri' },
  { key: 'khasi', name: 'Khasi' },
];

interface CampaignDetailsDialogProps {
  campaign: Campaign | null;
  onOpenChange: (open: boolean) => void;
}

export function CampaignDetailsDialog({
  campaign,
  onOpenChange,
}: CampaignDetailsDialogProps) {
  const [language, setLanguage] = useState<LanguageKey>('english');
  const { toast } = useToast();
  const { t } = useI18n();

  if (!campaign) return null;

  const image = PlaceHolderImages.find(p => p.id === campaign.imageId);
  const currentContent = campaign.content[language] || campaign.content['english'];
  const currentTitle = campaign.title[language] || campaign.title['english'];

  const handleMarkdownDownload = () => {
    if (!campaign) return;
  
    const { title, content } = campaign;
    const selectedTitle = title[language] || title['english'];
    const selectedContent = content[language] || content['english'];
  
    // Simple HTML to Markdown conversion
    const markdownContent = selectedContent
      .replace(/<h3>(.*?)<\/h3>/g, '### $1\\n')
      .replace(/<h4>(.*?)<\/h4>/g, '#### $1\\n')
      .replace(/<h5>(.*?)<\/h5>/g, '##### $1\\n')
      .replace(/<h6>(.*?)<\/h6>/g, '###### $1\\n')
      .replace(/<p>(.*?)<\/p>/g, '$1\\n\\n')
      .replace(/<ul>/g, '')
      .replace(/<\/ul>/g, '')
      .replace(/<li><strong>(.*?)<\/strong>: (.*?)<\/li>/g, '* **$1:** $2\\n')
      .replace(/<li>(.*?)<\/li>/g, '* $1\\n')
      .replace(/<strong>(.*?)<\/strong>/g, '**$1**')
      .replace(/<ol>/g, '')
      .replace(/<\/ol>/g, '')
      .replace(/<li>(.*?)<\/li>/g, (match, p1, offset, string) => {
          // A simple way to number ordered lists
          const olMatch = string.substring(0, offset).match(/<ol>/g);
          if (olMatch) {
              const listIndex = string.substring(0, offset).lastIndexOf('<ol>');
              const itemIndex = (string.substring(listIndex, offset).match(/<li>/g) || []).length;
              return `${itemIndex}. ${p1}\\n`;
          }
          return `* ${p1}\\n`;
      })
      .trim();

  
    const fullMarkdown = `# ${selectedTitle}\\n\\n${markdownContent}`;
    const blob = new Blob([fullMarkdown], { type: 'text/markdown;charset=utf-8' });
    saveAs(blob, `${selectedTitle.replace(/\s+/g, '-')}.md`);
  };

  const handlePdfDownload = () => {
    toast({
      title: t('comingSoon'),
      description: t('pdfNotImplemented'),
    });
  };

  return (
    <Dialog open={!!campaign} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="font-headline text-2xl">{currentTitle}</DialogTitle>
             <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  {languages.find(l => l.key === language)?.name}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {languages.map(lang => (
                   <DropdownMenuItem key={lang.key} onSelect={() => setLanguage(lang.key)} disabled={!campaign.title[lang.key]}>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <DialogDescription>
            <Badge variant="secondary">{campaign.category}</Badge>
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
          <div>
            {image && (
                <div className="aspect-video w-full overflow-hidden rounded-lg border">
                  <Image
                    src={image.imageUrl}
                    alt={campaign.title.english}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                    data-ai-hint={image.imageHint}
                  />
                </div>
              )}
          </div>
          <div className="prose prose-sm dark:prose-invert max-w-full">
            <div dangerouslySetInnerHTML={{ __html: currentContent }} />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={handlePdfDownload}>
            <Download className="mr-2 h-4 w-4" />
            {t('downloadPDF')}
          </Button>
          <Button variant="outline" onClick={handleMarkdownDownload}>
            <FileText className="mr-2 h-4 w-4" />
            {t('downloadMarkdown')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
