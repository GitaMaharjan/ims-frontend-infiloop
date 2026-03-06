import { useState } from "react"; // 1. Import useState
import Label from "../Label";
import Input from "../Input";
import { FormData } from "@/types/registerTypes";
import EyeIcon from "@/components/Login/EyeIcon";

interface Props {
  form: FormData;
  errors: Partial<FormData>;
  set: (field: keyof FormData, value: string) => void;
}

export default function StepPassword({ form, errors, set }: Props) {
  // 3. State to toggle visibility
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const getStrength = () => {
    const { password } = form;
    if (!password) return 0;
    if (
      password.length >= 12 &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[^A-Za-z0-9]/.test(password)
    )
      return 4;
    if (password.length >= 10 && /[A-Z]/.test(password)) return 3;
    if (password.length >= 8) return 2;
    return 1;
  };

  const strength = getStrength();

  return (
    <div>
      <h2 className="text-sm font-semibold text-white mb-5">
        Set Admin Password
      </h2>
      
      <Label>Password *</Label>
      <div className="relative">
        <Input
          type={showPass ? "text" : "password"} // 4. Toggle type
          placeholder="Minimum 8 characters"
          value={form.password}
          onChange={(e) => set("password", e.target.value)}
          error={errors.password}
        />
        <button
          type="button"
          onClick={() => setShowPass(!showPass)}
          className="absolute right-3 top-3 text-slate-400 hover:text-white transition-colors"
        >
          <EyeIcon open={showPass} />
        </button>
      </div>

      <Label>Confirm Password *</Label>
      <div className="relative">
        <Input
          type={showConfirm ? "text" : "password"} // 5. Toggle type
          placeholder="Repeat password"
          value={form.confirmPassword}
          onChange={(e) => set("confirmPassword", e.target.value)}
          error={errors.confirmPassword}
        />
        <button
          type="button"
          onClick={() => setShowConfirm(!showConfirm)}
          className="absolute right-3 top-3 text-slate-400 hover:text-white transition-colors"
        >
          <EyeIcon open={showConfirm} />
        </button>
      </div>

      {form.password && (
        <div className="mt-1 mb-4">
          <div className="flex gap-1">
            {[1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                  level <= strength
                    ? strength === 4
                      ? "bg-emerald-500"
                      : strength === 3
                      ? "bg-yellow-500"
                      : "bg-red-500"
                    : "bg-slate-800"
                }`}
              />
            ))}
          </div>
          <p className="text-[10px] text-slate-600 mt-1">
            Use 12+ chars, uppercase, numbers & symbols for strong password
          </p>
        </div>
      )}
    </div>
  );
}