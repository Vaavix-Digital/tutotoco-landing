import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { FEATURES } from "@/lib/constants";

export default function FeaturesSection() {
  return (
    <section id="features" className="wrap sec">
      <SectionHeading title="Built for the moments that matter" subtitle="Everything is short, animated and one task at a time." />
      <Reveal className="mt-10 grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(min(300px,100%),1fr))]">
        {FEATURES.map((f) => (
          <div key={f.title} className="card-p">
            <span className="tile" style={{ background: f.tint }}><Icon name={f.icon} /></span>
            <h3 className="disp mt-4 text-2xl">{f.title}</h3>
            <p className="muted mt-2">{f.text}</p>
          </div>
        ))}
      </Reveal>
      <div className="mt-8 text-center">
        <Link href="/features" className="btn btn-white">See the full breakdown</Link>
      </div>
    </section>
  );
}
