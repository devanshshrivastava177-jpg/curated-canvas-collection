type Props = { items: string[] };

export function Marquee({ items }: Props) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <div className="marquee-track flex w-max items-center gap-16 whitespace-nowrap">
        {doubled.map((it, i) => (
          <span
            key={`${it}-${i}`}
            className="font-display italic"
            style={{ fontSize: 32, color: "#b0a89a" }}
          >
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}
