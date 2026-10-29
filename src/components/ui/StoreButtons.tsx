import ScrollLink from "./ScrollLink";

interface Props {
  dark?: boolean;
  href?: string;
  /** Plain placeholder links for the real store listings (used on the Download page). */
  external?: boolean;
}

export default function StoreButtons({ dark = false, href = "#download", external = false }: Props) {
  const ink = dark ? "btn btn-white" : "btn btn-ink";
  if (external) {
    return (
      <div className="flex flex-wrap gap-3">
        <a href="#" className={ink}>App Store</a>
        <a href="#" className="btn btn-mint">Google Play</a>
      </div>
    );
  }
  return (
    <div className="flex flex-wrap gap-3">
      <ScrollLink href={href} className={ink}>App Store</ScrollLink>
      <ScrollLink href={href} className="btn btn-mint">Google Play</ScrollLink>
    </div>
  );
}
