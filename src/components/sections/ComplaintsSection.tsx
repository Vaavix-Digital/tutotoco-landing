import SectionHeading from "@/components/ui/SectionHeading";
import { COMPLAINTS } from "@/lib/constants";

export default function ComplaintsSection() {
  return (
    <section className="wrap sec">
      <SectionHeading title="Built to fix what learners complain about" />
      <div className="mt-9 grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(min(480px,100%),1fr))]">
        {COMPLAINTS.map(([bad, good]) => (
          <div key={bad} className="card-p flex flex-wrap gap-x-4 gap-y-1 !py-4">
            <span className="muted min-w-[180px] flex-[1_1_180px]">{bad}</span>
            <b className="min-w-[180px] flex-[1_1_180px] text-[#5238D4]">{good}</b>
          </div>
        ))}
      </div>
    </section>
  );
}
