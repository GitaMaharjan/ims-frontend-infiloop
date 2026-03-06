export default function Input({
  error,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { error?: string }) {
  return (
    <div className="mb-4">
      <input
        {...props}
        className={`w-full bg-slate-900 border ${
          error ? "border-red-500/70" : "border-slate-700"
        } rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 outline-none
          focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-200`}
      />
      {error && <p className="mt-1 text-[11px] text-red-400">{error}</p>}
    </div>
  );
}
