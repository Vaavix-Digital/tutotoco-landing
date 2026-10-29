const SIZE = 21;
const CELLS = Array.from({ length: SIZE * SIZE }, (_, i) => (i * 7 + Math.floor(i / SIZE) * 13) % 5 < 2);

function Finder({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <rect x={x} y={y} width="7" height="7" fill="#2A1F4D" />
      <rect x={x + 1} y={y + 1} width="5" height="5" fill="#fff" />
      <rect x={x + 2} y={y + 2} width="3" height="3" fill="#2A1F4D" />
    </g>
  );
}

export default function QrPlaceholder() {
  return (
    <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="h-44 w-44" role="img" aria-label="QR code placeholder">
      {CELLS.map((on, i) => {
        const x = i % SIZE;
        const y = Math.floor(i / SIZE);
        return on && (x > 7 || y > 7) ? <rect key={i} x={x} y={y} width="1" height="1" fill="#2A1F4D" /> : null;
      })}
      <Finder x={0} y={0} />
      <Finder x={14} y={0} />
      <Finder x={0} y={14} />
    </svg>
  );
}
