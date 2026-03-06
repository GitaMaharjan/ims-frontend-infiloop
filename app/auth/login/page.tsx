import LoginForm from "@/components/Login/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#080b12] flex font-sans">
      {/* Left panel */}
      <div className="hidden lg:flex flex-col justify-between w-[420px] flex-shrink-0 border-r border-slate-800/60 p-12 relative overflow-hidden">
        {/* You can move your logo & features here */}
        {/* ...same as original left panel */}
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center p-6">
        <LoginForm />
      </div>
    </div>
  );
}
