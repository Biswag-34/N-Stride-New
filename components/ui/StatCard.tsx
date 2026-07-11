import { Card } from "@/components/ui/Card";

type StatCardProps = {
  description?: string;
  label: string;
  value: string;
};

export function StatCard({ description, label, value }: StatCardProps) {
  return (
    <Card className="p-6">
      <p className="font-heading text-3xl font-semibold text-primary-dark">{value}</p>
      <p className="mt-2 text-sm font-semibold text-text-primary">{label}</p>
      {description ? <p className="mt-2 text-sm leading-6 text-text-secondary">{description}</p> : null}
    </Card>
  );
}
