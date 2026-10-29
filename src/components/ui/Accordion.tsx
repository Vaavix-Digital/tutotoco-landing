import Icon from "./Icon";

export default function Accordion({ items }: { items: [string, string][] }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map(([q, a]) => (
        <details key={q} className="rounded-[18px] border-2 border-[#DDD6FB] bg-white px-5 py-4">
          <summary className="flex items-center justify-between gap-3 text-lg font-extrabold">
            {q}
            <Icon name="chev" size={22} className="chev shrink-0" />
          </summary>
          <p className="muted mt-2 leading-[1.55]">{a}</p>
        </details>
      ))}
    </div>
  );
}
