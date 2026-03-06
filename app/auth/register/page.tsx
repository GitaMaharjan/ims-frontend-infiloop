"use client";

import { useState, useCallback } from "react";

import { FormData } from "@/types/registerTypes";
import { checkEmail, checkOrgName, registerOrganization } from "@/services/registerApi";
import StepAdmin from "@/components/Steps/StepAdmin";
import StepOrganization from "@/components/Steps/StepOrganization";
import StepPassword from "@/components/Steps/StepPassword";
import StepReview from "@/components/Steps/StepReview";
import StepBar from "@/components/Register/StepBar";
import Spinner from "@/components/Register/Spinner";

type StepStatus = "idle" | "checking" | "error" | "ok";

export default function RegisterPage() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<StepStatus>("idle");
  const [globalError, setGlobalError] = useState("");
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState<FormData>({
    name: "",
    address: "",
    contactName: "",
    email: "",
    phone: "",
    designation: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const set = (field: keyof FormData, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: "" }));
  };

  const validateStep = useCallback((): boolean => {
    const e: Partial<FormData> = {};
    if (step === 0 && !form.name.trim())
      e.name = "Organization name is required";
    if (step === 1) {
      if (!form.contactName.trim()) e.contactName = "Name is required";
      if (!form.email.trim()) e.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
      if (!form.phone.trim()) e.phone = "Phone is required";
      if (!form.designation.trim()) e.designation = "Designation is required";
    }
    if (step === 2) {
      if (!form.password) e.password = "Password is required";
      else if (form.password.length < 8) e.password = "Minimum 8 characters";
      if (!form.confirmPassword)
        e.confirmPassword = "Please confirm your password";
      else if (form.password !== form.confirmPassword)
        e.confirmPassword = "Passwords do not match";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }, [step, form]);

  const handleNext = async () => {
    if (!validateStep()) return;
    setGlobalError("");
    setStatus("checking");
    // console.log("Backend URL:", process.env.NEXT_PUBLIC_API_URL)

    try {
      if (step === 0 && (await checkOrgName(form.name))) {
        setErrors((e) => ({ ...e, name: "Organization name already taken" }));

        setStatus("error");
        return;
      }
      if (step === 1 && (await checkEmail(form.email))) {
        setErrors((e) => ({ ...e, email: "Email already registered" }));
        setStatus("error");
        return;
      }
      setStatus("ok");
      setStep((s) => s + 1);
    } catch {
      setStatus("error");
      setGlobalError("Network error. Please try again.");
    }
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setGlobalError("");
    try {
      await registerOrganization(form);
      setSuccess(true);
    } catch (error) {
      setGlobalError(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
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
            href="/login"
            className="inline-block text-sm text-indigo-400 border border-indigo-500/30 rounded-lg px-5 py-2.5 hover:bg-indigo-500/10 transition-colors"
          >
            Back to Login
          </a>
        </div>
      </div>
    );
  }

  const StepComponents = [
    StepOrganization,
    StepAdmin,
    StepPassword,
    StepReview,
  ];
  const CurrentStep = StepComponents[step];

  return (
    <div className="min-h-screen bg-[#080b12] flex items-center justify-center p-4 font-mono">
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="w-full max-w-lg relative z-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-7 h-7 rounded bg-indigo-500 flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10"
                />
              </svg>
            </div>
            <span className="text-white font-semibold tracking-tight text-sm">
              IMS
            </span>
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Register Organization
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Set up your organization account for approval
          </p>
        </div>

        {/* Card */}
        <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm">
          <StepBar current={step} />
          {globalError && (
            <div className="mb-5 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
              {globalError}
            </div>
          )}

          <CurrentStep form={form} errors={errors} set={set} />

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {step > 0 ? (
              <button
                onClick={() => setStep((s) => s - 1)}
                className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back
              </button>
            ) : (
              <a
                href="/auth/login"
                className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
              >
                Sign in instead
              </a>
            )}

            {step < 3 ? (
              <button
                onClick={handleNext}
                disabled={status === "checking"}
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-medium rounded-lg px-5 py-2.5 transition-colors"
              >
                {status === "checking" ? (
                  <>
                    <Spinner /> Checking…
                  </>
                ) : (
                  <>
                    Next
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </>
                )}
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-medium rounded-lg px-5 py-2.5 transition-colors"
              >
                {submitting ? (
                  <>
                    <Spinner /> Submitting…
                  </>
                ) : (
                  "Create Account"
                )}
              </button>
            )}
          </div>
        </div>

        <p className="text-center text-slate-700 text-xs mt-6">
          © {new Date().getFullYear()} IMS — Inventory Management System
        </p>
      </div>
    </div>
  );
}
