// ─── Sub-components ───────────────────────────────────────────────────────────
export default function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-[11px] font-semibold tracking-widest uppercase text-slate-400 mb-1.5">
      {children}
    </label>
  );
}
