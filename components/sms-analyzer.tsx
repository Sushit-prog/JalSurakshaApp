
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Bot,
  FileJson,
  Hash,
  Home,
  Loader2,
  Stethoscope,
  TestTube,
  User,
  Waves,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

import {
  analyzeSmsReport,
  type AnalyzeSmsReportOutput,
} from "@/ai/flows/sms-report-analysis";

const formSchema = z.object({
  smsBody: z.string().min(10, {
    message: "SMS body must be at least 10 characters.",
  }),
});

export function SmsAnalyzer() {
  const [analysisResult, setAnalysisResult] =
    useState<AnalyzeSmsReportOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      smsBody: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setAnalysisResult(null);
    try {
      const result = await analyzeSmsReport({ smsBody: values.smsBody });
      setAnalysisResult(result);
    } catch (error) {
      console.error("Analysis failed:", error);
      toast({
        variant: "destructive",
        title: "Analysis Failed",
        description: "Could not analyze the SMS. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  const setSampleSms = (sample: 'human' | 'iot') => {
    if (sample === 'human') {
        form.setValue('smsBody', 'REPORT village=Jalsuraksha s=diarrhea,fever ph=6.2 turb=8 cases=10 reporter=Rina Das');
    } else {
        form.setValue('smsBody', 'sensor_id=AQ-101, village=Vidyutgram, ph=8.1, turb=15.2');
    }
  }

  return (
    <div className="space-y-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="smsBody"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Paste SMS Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g., REPORT village=Jalsuraksha s=diarrhea,fever ph=7 turb=5"
                    className="font-code"
                    rows={4}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-wrap gap-2">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Bot className="mr-2 h-4 w-4" />
              )}
              Analyze Report
            </Button>
            <Button type="button" variant="outline" size="sm" onClick={() => setSampleSms('human')}>
                Sample Human Report
            </Button>
             <Button type="button" variant="outline" size="sm" onClick={() => setSampleSms('iot')}>
                Sample IoT Report
            </Button>
          </div>
        </form>
      </Form>
      {isLoading && (
        <div className="flex items-center gap-2 text-muted-foreground rounded-lg border bg-secondary/50 p-4">
          <Loader2 className="h-4 w-4 animate-spin" />
          <p>Analyzing...</p>
        </div>
      )}
      {analysisResult && (
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4 space-y-4">
              <h4 className="font-semibold">Summary</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Home className="size-4 text-muted-foreground" />
                  <span className="font-medium">Village:</span>
                  <span>{analysisResult.village}</span>
                </div>
                 <div className="flex items-center gap-2">
                   <User className="size-4 text-muted-foreground" />
                  <span className="font-medium">Reporter:</span>
                  <span>{analysisResult.reporter ?? 'N/A'}</span>
                </div>
                <div className="flex items-center gap-2 col-span-2">
                  <Stethoscope className="size-4 text-muted-foreground" />
                  <span className="font-medium">Symptoms:</span>
                  <span className="truncate">{analysisResult.symptoms.join(', ') || 'N/A'}</span>
                </div>
                <div className="flex items-center gap-2">
                   <TestTube className="size-4 text-muted-foreground" />
                  <span className="font-medium">pH:</span>
                  <span>{analysisResult.waterQuality.ph ?? 'N/A'}</span>
                </div>
                <div className="flex items-center gap-2">
                   <Waves className="size-4 text-muted-foreground" />
                  <span className="font-medium">Turbidity:</span>
                  <span>{analysisResult.waterQuality.turbidity ?? 'N/A'}</span>
                </div>
                 <div className="flex items-center gap-2">
                   <Hash className="size-4 text-muted-foreground" />
                  <span className="font-medium">Cases:</span>
                  <span>{analysisResult.cases ?? 'N/A'}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <FileJson className="size-4"/>
                  <span>JSON Preview</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <pre className="font-code text-sm overflow-x-auto rounded-md bg-background p-3 border">
                  {JSON.stringify(analysisResult, null, 2)}
                </pre>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      )}
    </div>
  );
}
