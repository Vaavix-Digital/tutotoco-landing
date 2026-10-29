import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { REASONS } from "@/lib/constants";

export default function ReasonsSection() {
  return (
    <section className="bg-[#FFF6D6] py-20">
      <div className="wrap">
        <SectionHeading title="Made for your reason to learn" subtitle="Start from zero, travel, work, settle in or pass an exam." subClassName="mb-9" />
        <div className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(200px,100%),1fr))]">
          {REASONS.map((r) => (
            <div key={r.title} className="card-p">
              <span className="tile bg-[#FFE9A8]"><Icon name={r.icon} /></span>
              <h3 className="disp mt-4 text-2xl">{r.title}</h3>
              <p className="muted mt-2">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
