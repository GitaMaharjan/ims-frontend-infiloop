// components/Login/LoginForm.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import EyeIcon from "./EyeIcon";
import Spinner from "./Spinner";
import RoleSelector from "./RoleSelector";
import { UserRole } from "@/types/loginTypes";
import { loginUser } from "@/services/loginApi";

export default function LoginForm() {
  const router = useRouter();
  const [role, setRole] = useState<UserRole>("ORG_ADMIN");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({ email: "", password: "" });

  const validate = () => {
    const e = { email: "", password: "" };
    if (!email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) e.email = "Invalid email address";
    if (!password) e.password = "Password is required";
    setFieldErrors(e);
    return !e.email && !e.password;
  };

  const handleSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault();
    if (!validate()) return;
    setError("");
    setLoading(true);

    try {
      const data = await loginUser(email, password);
      if (!data.success) {
        setError(data.message ?? "Login failed");
        return;
      }

      // Persist tokens
      if (data.accessToken) {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken ?? "");
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      const userRole = data.user?.role;
      if (userRole === "ORG_ADMIN") router.push("/dashboard");
      else if (userRole === "STAFF") router.push("/warehouse");
      else router.push("/");
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-sm">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white tracking-tight mb-1">
          Welcome back
        </h1>
        <p className="text-slate-500 text-sm">
          Sign in to your inventory workspace
        </p>
      </div>

      <RoleSelector
        role={role}
        setRole={(r) => {
          setRole(r);
          setError("");
        }}
      />

      {error && (
        <div className="mb-5 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-start gap-2">
          <svg
            className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* Email */}
        <div className="mb-4">
          <label className="block text-[11px] font-semibold tracking-widest uppercase text-slate-400 mb-1.5">
            Email
          </label>
          <input
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setFieldErrors((f) => ({ ...f, email: "" }));
            }}
            className={`w-full bg-slate-900 border ${
              fieldErrors.email ? "border-red-500/70" : "border-slate-700"
            } rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-200`}
          />
          {fieldErrors.email && (
            <p className="mt-1 text-[11px] text-red-400">{fieldErrors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-[11px] font-semibold tracking-widest uppercase text-slate-400">
              Password
            </label>
            <button
              type="button"
              className="text-[11px] text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Forgot password?
            </button>
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setFieldErrors((f) => ({ ...f, password: "" }));
              }}
              className={`w-full bg-slate-900 border ${
                fieldErrors.password ? "border-red-500/70" : "border-slate-700"
              } rounded-lg px-4 py-2.5 pr-10 text-sm text-white placeholder-slate-600 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-200`}
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
            >
              <EyeIcon open={showPassword} />
            </button>
          </div>
          {fieldErrors.password && (
            <p className="mt-1 text-[11px] text-red-400">
              {fieldErrors.password}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-lg py-2.5 transition-colors shadow-lg shadow-indigo-500/20"
        >
          {loading ? (
            <>
              <Spinner /> Signing in…
            </>
          ) : (
            "Sign In"
          )}
        </button>
      </form>

      {role === "ORG_ADMIN" && (
        <p className="mt-5 text-center text-slate-600 text-xs">
          New organization?{" "}
          <a
            href="/register"
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Register here
          </a>
        </p>
      )}

      {role === "STAFF" && (
        <p className="mt-5 text-center text-slate-600 text-xs">
          Staff accounts are created by your Org Admin.
        </p>
      )}
    </div>
  );
}
