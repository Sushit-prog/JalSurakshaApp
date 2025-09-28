
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import type { Alert } from './alerts-table';
import { Badge } from './ui/badge';

interface AlertDetailsDialogProps {
  alert: Alert | null;
  onOpenChange: (open: boolean) => void;
}

export function AlertDetailsDialog({
  alert,
  onOpenChange,
}: AlertDetailsDialogProps) {
  if (!alert) return null;

  const severityVariant: Record<
    Alert['severity'],
    'destructive' | 'secondary' | 'default'
  > = {
    High: 'destructive',
    Medium: 'secondary',
    Low: 'default',
  };

  return (
    <Dialog open={!!alert} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-headline flex items-center gap-4">
            <span>{alert.id}</span>
            <Badge variant={severityVariant[alert.severity]}>
              {alert.severity}
            </Badge>
          </DialogTitle>
          <DialogDescription>
            Details for the alert in {alert.village}.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Status</span>
            <span className="font-medium">{alert.status}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Village</span>
            <span className="font-medium">{alert.village}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Linked Reports</span>
            <span className="font-medium">{alert.reports}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Alert Time</span>
            <span className="font-medium">
              {new Date(alert.createdAt).toLocaleString()}
            </span>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline">Assign Official</Button>
          <Button>Mark as Investigating</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
