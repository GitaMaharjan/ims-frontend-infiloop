export default function ReviewRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between items-start py-2.5 border-b border-slate-800 last:border-0">
      <span className="text-[11px] tracking-widest uppercase text-slate-500">
        {label}
      </span>
      <span className="text-sm text-slate-200 text-right max-w-[55%] break-words">
        {value}
      </span>
    </div>
  );
}
