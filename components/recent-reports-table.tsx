"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/context/I18nContext";

export type Report = {
  id: string;
  date: string;
  village: string;
  symptoms: string[];
  ph: number | null;
  turbidity: number | null;
  cases: number;
  reporter: string;
};

export function RecentReportsTable({ reports = [] }: { reports?: Report[] }) {
  const { t } = useI18n();
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>{t('date')}</TableHead>
          <TableHead>{t('village')}</TableHead>
          <TableHead>{t('symptoms')}</TableHead>
          <TableHead>{t('waterPH')}</TableHead>
          <TableHead>{t('turbidity')}</TableHead>
          <TableHead>{t('cases')}</TableHead>
          <TableHead>{t('reporter')}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {reports.map((report) => (
          <TableRow key={report.id}>
            <TableCell>{new Date(report.date).toLocaleDateString()}</TableCell>
            <TableCell>{report.village}</TableCell>
            <TableCell>
              <div className="flex flex-wrap gap-1">
                {report.symptoms.map(symptom => <Badge key={symptom} variant="secondary" className="capitalize">{t(symptom)}</Badge>)}
              </div>
            </TableCell>
            <TableCell>{report.ph ?? 'N/A'}</TableCell>
            <TableCell>{report.turbidity ? `${report.turbidity} NTU` : 'N/A'}</TableCell>
            <TableCell>{report.cases}</TableCell>
            <TableCell>{report.reporter}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
