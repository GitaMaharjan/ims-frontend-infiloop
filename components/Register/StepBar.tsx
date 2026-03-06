// ─── Step indicators ──────────────────────────────────────────────────────────
const STEPS = ["Organization", "Admin", "Password", "Review"];

export default function StepBar({ current }: { current: number }) {
  return (
    <div className="flex items-center gap-0 mb-10">
      {STEPS.map((label, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <div key={i} className="flex items-center flex-1">
            <div className="flex flex-col items-center">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300
                  ${
                    done
                      ? "bg-indigo-500 text-white"
                      : active
                      ? "bg-indigo-500/20 border border-indigo-500 text-indigo-400"
                      : "bg-slate-800 border border-slate-700 text-slate-600"
                  }`}
              >
                {done ? (
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  i + 1
                )}
              </div>
              <span
                className={`text-[10px] mt-1 tracking-wide ${
                  active ? "text-indigo-400" : "text-slate-600"
                }`}
              >
                {label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={`flex-1 h-px mx-1 mb-4 transition-all duration-300 ${
                  done ? "bg-indigo-500" : "bg-slate-800"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
