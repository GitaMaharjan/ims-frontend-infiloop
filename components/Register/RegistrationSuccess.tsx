export function RegistrationSuccess() {
  return (
    <div className="min-h-screen bg-[#080b12] flex items-center justify-center p-4">
      <div className="w-full max-w-md text-center">
        <div className="w-16 h-16 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center mx-auto mb-5">
          <svg
            className="w-8 h-8 text-indigo-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">
          Registration Submitted
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          Your organization has been registered successfully. A system
          administrator will review and approve your account. You will be able
          to log in once approved.
        </p>
        <a
          href="/auth/login"
          className="inline-block text-sm text-indigo-400 border border-indigo-500/30 rounded-lg px-5 py-2.5 hover:bg-indigo-500/10 transition-colors"
        >
          Back to Login
        </a>
      </div>
    </div>
  );
}
