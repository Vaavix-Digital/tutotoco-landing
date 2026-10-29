interface MascotProps { size?: number; happy?: boolean; headset?: boolean; className?: string }

export default function Mascot({ size = 40, happy = false, headset = false, className }: MascotProps) {
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} aria-hidden="true" className={className}>
      <circle cx="30" cy="28" r="16" fill="#6C4DF6" />
      <circle cx="90" cy="28" r="16" fill="#6C4DF6" />
      <circle cx="60" cy="66" r="44" fill="#8B73FF" />
      <circle cx="42" cy="76" r="7" fill="#FF9DB8" />
      <circle cx="78" cy="76" r="7" fill="#FF9DB8" />
      {happy ? (
        <>
          <path d="M38 60 Q46 54 54 60 M66 60 Q74 54 82 60" stroke="#2A1F4D" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M50 76 Q60 88 70 76" stroke="#2A1F4D" strokeWidth="4" strokeLinecap="round" fill="none" />
        </>
      ) : (
        <>
          <circle cx="46" cy="60" r="5" fill="#2A1F4D" />
          <circle cx="74" cy="60" r="5" fill="#2A1F4D" />
          <path d="M52 78 Q60 86 68 78" stroke="#2A1F4D" strokeWidth="4" strokeLinecap="round" fill="none" />
        </>
      )}
      {headset && (
        <>
          <path d="M18 64 A42 42 0 0 1 102 64" stroke="#2A1F4D" strokeWidth="5" fill="none" strokeLinecap="round" />
          <rect x="10" y="58" width="12" height="24" rx="6" fill="#2A1F4D" />
          <rect x="98" y="58" width="12" height="24" rx="6" fill="#2A1F4D" />
          <path d="M104 80 Q104 96 80 98" stroke="#2A1F4D" strokeWidth="4" fill="none" strokeLinecap="round" />
          <circle cx="76" cy="98" r="5" fill="#20C08B" />
        </>
      )}
    </svg>
  );
}
