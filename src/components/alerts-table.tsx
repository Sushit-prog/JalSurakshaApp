
'use client';

import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { AlertDetailsDialog } from '@/components/alert-details-dialog';
import { useI18n } from '@/context/I18nContext';

export type Alert = {
  id: string;
  village: string;
  severity: 'High' | 'Medium' | 'Low';
  status: 'Open' | 'Investigating' | 'Closed';
  reports: number;
  time: string;
  createdAt: string;
};

const initialAlerts: Alert[] = [
  {
    id: 'ALERT-001',
    village: 'Jalsuraksha',
    severity: 'High',
    status: 'Open',
    reports: 12,
    time: '5m ago',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'ALERT-002',
    village: 'Pawanpur',
    severity: 'Medium',
    status: 'Investigating',
    reports: 7,
    time: '45m ago',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'ALERT-003',
    village: 'Agnigiri',
    severity: 'High',
    status: 'Open',
    reports: 15,
    time: '1.2h ago',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'ALERT-004',
    village: 'Jalsuraksha',
    severity: 'Low',
    status: 'Closed',
    reports: 5,
    time: '3h ago',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'ALERT-005',
    village: 'Vidyutgram',
    severity: 'Medium',
    status: 'Investigating',
    reports: 8,
    time: '5h ago',
    createdAt: new Date().toISOString(),
  },
];

type Severity = 'High' | 'Medium' | 'Low';

const severityVariant: Record<Severity, 'destructive' | 'secondary' | 'default'> =
  {
    High: 'destructive',
    Medium: 'secondary',
    Low: 'default',
  };

export function AlertsTable({ alerts = initialAlerts }: { alerts?: Alert[] }) {
  const [selectedAlert, setSelectedAlert] = React.useState<Alert | null>(null);
  const { t } = useI18n();

  return (
    <TooltipProvider>
      <AlertDetailsDialog
        alert={selectedAlert}
        onOpenChange={(isOpen) => !isOpen && setSelectedAlert(null)}
      />
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t('village')}</TableHead>
              <TableHead>{t('severity')}</TableHead>
              <TableHead>{t('reports')}</TableHead>
              <TableHead className="text-right">{t('time')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {alerts.length > 0 ? (
              alerts.map((alert) => (
                <TableRow
                  key={alert.id}
                  onClick={() => setSelectedAlert(alert)}
                  className="cursor-pointer"
                >
                  <TableCell>
                    <div className="font-medium">{alert.village}</div>
                    <div className="text-xs text-muted-foreground">
                      {t(alert.status.toLowerCase())}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={severityVariant[alert.severity as Severity]}>
                      {t(alert.severity.toLowerCase())}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{alert.reports}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Tooltip>
                      <TooltipTrigger>
                        <span>{alert.time}</span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{new Date(alert.createdAt).toLocaleString()}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="h-24 text-center">
                  No alerts found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </TooltipProvider>
  );
}
