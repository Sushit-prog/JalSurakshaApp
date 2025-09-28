
'use client';

import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Campaign } from '@/lib/campaigns-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useI18n } from '@/context/I18nContext';

interface CampaignCardProps {
  campaign: Campaign;
  onViewDetails: () => void;
}

const languageMap: Record<string, keyof Campaign['title']> = {
  en: 'english',
  as: 'assamese',
  bn: 'bengali',
  brx: 'bodo',
};


export function CampaignCard({ campaign, onViewDetails }: CampaignCardProps) {
  const image = PlaceHolderImages.find(p => p.id === campaign.imageId);
  const { t, language } = useI18n();

  const currentLanguageKey = languageMap[language] || 'english';
  const title = campaign.title[currentLanguageKey];
  const summary = campaign.summary[currentLanguageKey];

  return (
    <Card className="flex flex-col">
      <CardHeader>
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
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-2 flex items-center justify-between">
           <CardTitle className="text-lg font-headline">{title}</CardTitle>
            <Badge variant="outline">{campaign.language}</Badge>
        </div>
        <CardDescription>{summary}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button onClick={onViewDetails} className="w-full">
          {t('viewDetails')}
        </Button>
      </CardFooter>
    </Card>
  );
}
