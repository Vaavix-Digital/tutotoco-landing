import { slugify } from "@/lib/utils";
import type { LegalSection } from "@/lib/pages-data";

export default function LegalPage({ title, sections }: { title: string; sections: LegalSection[] }) {
  return (
    <div className="wrap sec !pt-8">
      <div className="flex flex-wrap items-start gap-10">
        <nav aria-label="Contents" className="card-p hidden w-56 shrink-0 !p-4 text-sm font-extrabold lg:sticky lg:top-6 lg:block">
          {sections.map(([name]) => (
            <a key={name} href={`#${slugify(name)}`} className="block rounded-lg px-2 py-1.5 hover:bg-[#EFEBFF]">{name}</a>
          ))}
        </nav>
        <article className="min-w-0 max-w-[720px] flex-1">
          <h1 className="disp h2">{title}</h1>
          <p className="muted mt-2">Draft wording, to be checked by a lawyer.</p>
          {sections.map(([name, text]) => (
            <section key={name} id={slugify(name)} className="mt-8 scroll-mt-6">
              <h2 className="disp text-[28px]">{name}</h2>
              <p className="muted mt-2 leading-[1.6]">{text}</p>
            </section>
          ))}
        </article>
      </div>
    </div>
  );
}
