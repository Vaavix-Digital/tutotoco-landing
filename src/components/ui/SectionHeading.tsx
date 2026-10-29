import { cn } from "@/lib/utils";

interface Props { title: string; subtitle?: string; className?: string; subClassName?: string }

export default function SectionHeading({ title, subtitle, className, subClassName }: Props) {
  return (
    <div className={cn("text-center", className)}>
      <h2 className="disp h2">{title}</h2>
      {subtitle && <p className={cn("muted mt-3 text-lg", subClassName)}>{subtitle}</p>}
    </div>
  );
}
