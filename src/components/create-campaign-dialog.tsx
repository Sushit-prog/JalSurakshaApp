
'use client';

import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import type { Campaign } from '@/lib/campaigns-data';
import { useToast } from '@/hooks/use-toast';
import { useI18n } from '@/context/I18nContext';

const languages = ['English', 'Assamese', 'Bengali', 'Bodo', 'Manipuri', 'Khasi'];

const formSchema = z.object({
  title: z.string().min(1, 'Title is required.'),
  language: z.string().min(1, 'Language is required.'),
  category: z.string().min(1, 'Category is required.'),
  summary: z.string().min(1, 'Summary is required.'),
  content: z.string().min(1, 'Body/Message is required.'),
});

type CampaignFormValues = Omit<Campaign, 'id' | 'imageId'>;
type MappedFormValues = {
  title: string;
  language: string;
  category: string;
  summary: string;
  content: string;
};


interface CreateCampaignDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onCampaignCreate: (campaign: CampaignFormValues) => void;
}

export function CreateCampaignDialog({
  isOpen,
  onOpenChange,
  onCampaignCreate,
}: CreateCampaignDialogProps) {
  const { toast } = useToast();
  const { t } = useI18n();

  const form = useForm<MappedFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      language: 'English',
      category: 'Water Safety',
      summary: '',
      content: '',
    },
  });

  const onSubmit: SubmitHandler<MappedFormValues> = (data) => {
    // For simplicity, we'll just copy the English content to other languages.
    // In a real app, this would involve translation.
    const newCampaign: CampaignFormValues = {
        title: { 
          english: data.title, 
          assamese: data.title,
          bengali: data.title,
          bodo: data.title,
          manipuri: data.title,
          khasi: data.title,
        },
        summary: { 
          english: data.summary,
          assamese: data.summary,
          bengali: data.summary,
          bodo: data.summary,
          manipuri: data.summary,
          khasi: data.summary,
        },
        content: { 
          english: `<p>${data.content.replace(/\n/g, '</p><p>')}</p>`,
          assamese: `<p>${data.content.replace(/\n/g, '</p><p>')}</p>`,
          bengali: `<p>${data.content.replace(/\n/g, '</p><p>')}</p>`,
          bodo: `<p>${data.content.replace(/\n/g, '</p><p>')}</p>`,
          manipuri: `<p>${data.content.replace(/\n/g, '</p><p>')}</p>`,
          khasi: `<p>${data.content.replace(/\n/g, '</p><p>')}</p>`,
        },
        language: data.language,
        category: data.category
    };

    onCampaignCreate(newCampaign);
    toast({
      title: t('campaignCreated'),
      description: t('campaignCreatedSuccess'),
    });
    form.reset();
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="font-headline">{t('createCampaignDialogTitle')}</DialogTitle>
          <DialogDescription>
            {t('createCampaignDialogDescription')}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('title')}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <div className="grid grid-cols-2 gap-4">
               <FormField
                control={form.control}
                name="language"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('primaryLanguage')}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={t('selectLanguage')} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {languages.map(lang => (
                          <SelectItem key={lang} value={lang}>{lang}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('category')}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={t('selectCategory')} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Water Safety">{t('waterSafety')}</SelectItem>
                        <SelectItem value="Disease Info">{t('diseaseInfo')}</SelectItem>
                        <SelectItem value="Hygiene">{t('hygiene')}</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="summary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('summary')}</FormLabel>
                  <FormControl>
                    <Textarea rows={2} {...field} placeholder={t('summaryPlaceholder')}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('bodyMessage')}</FormLabel>
                  <FormControl>
                    <Textarea rows={5} {...field} placeholder={t('bodyPlaceholder')}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">{t('createCampaign')}</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
