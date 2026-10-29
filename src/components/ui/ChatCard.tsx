interface Props { chips: [string, string]; lines: [string, boolean][]; rtl?: boolean }

export default function ChatCard({ chips, lines, rtl }: Props) {
  return (
    <div className="w-full max-w-[400px] rounded-[28px] bg-white p-5 text-[#2A1F4D]">
      <div className="mb-4 flex flex-wrap gap-2 text-sm font-extrabold">
        <span className="rounded-full bg-[#D6F7EA] px-3 py-1">✓ {chips[0]}</span>
        <span className="rounded-full bg-[#EFEBFF] px-3 py-1">{chips[1]}</span>
      </div>
      <div className="flex flex-col gap-3">
        {lines.map(([text, right]) => (
          <div
            key={text}
            dir={rtl ? "rtl" : undefined}
            className={`max-w-[80%] px-4 py-2 font-extrabold ${right ? "ml-auto rounded-[18px_18px_4px_18px] bg-[#6C4DF6] text-white" : "rounded-[18px_18px_18px_4px] bg-[#EFEBFF]"}`}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
