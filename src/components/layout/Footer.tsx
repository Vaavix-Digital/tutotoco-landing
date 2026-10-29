import ScrollLink from "@/components/ui/ScrollLink";
import { FOOTER_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="wrap muted flex flex-wrap items-center justify-between gap-4 py-7 text-[15px]">
      <span>© Tutotoco</span>
      <div className="flex flex-wrap gap-5">
        {FOOTER_LINKS.map(([label, href]) => (
          <ScrollLink key={label} href={href} className="font-bold hover:text-[#6C4DF6]">{label}</ScrollLink>
        ))}
      </div>
    </footer>
  );
}
