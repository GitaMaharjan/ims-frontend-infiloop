// app/auth/login/page.tsx
"use client";

import Link from "next/link";
import LoginForm from "@/components/Login/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#080b12] flex items-center justify-center p-6 font-mono">
      <div className="w-full max-w-lg relative z-10">
        {/* Header - Matches Register Page */}
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/" className="group flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-white uppercase">
                IMS<span className="text-cyan-500"></span>
              </span>
            </Link>
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Welcome Back
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Sign in to your inventory workspace
          </p>
        </div>

        {/* Card - Matches Register Page Style */}
        <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm">
          <LoginForm />
        </div>

        {/* Footer - Matches Register Page */}
        <p className="text-center text-slate-700 text-xs mt-6">
          © {new Date().getFullYear()} IMS — Inventory Management System
        </p>
      </div>
    </div>
  );
}
