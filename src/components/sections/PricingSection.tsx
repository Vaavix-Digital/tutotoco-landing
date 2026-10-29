import SectionHeading from "@/components/ui/SectionHeading";
import { PLANS } from "@/lib/constants";

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-white py-20">
      <div className="wrap">
        <SectionHeading title="Free to learn. Plus when you want more." subtitle="One paid plan, 3.99 per month. Free stays free." />
        <div className="mt-10 grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(300px,100%),1fr))]">
          {PLANS.map((p) => (
            <div key={p.name} className="card-p" style={p.featured ? { borderColor: "#6C4DF6" } : undefined}>
              <h3 className="disp text-[28px]">{p.name}</h3>
              <div className="disp mt-1 text-4xl text-[#6C4DF6]">
                {p.price} <span className="text-lg text-[#5E5388]">{p.unit}</span>
              </div>
              <ul className="muted mt-4 flex flex-col gap-2">
                {p.items.map((i) => <li key={i}>✓ {i}</li>)}
              </ul>
              {p.note && <p className="muted mt-4 text-sm">{p.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
