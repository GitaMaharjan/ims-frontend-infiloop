// components/steps/StepPassword.tsx
import Label from "../Register/Label";
import Input from "../Register/Input";
import { FormData } from "@/types/registerTypes";

interface Props {
  form: FormData;
  errors: Partial<FormData>;
  set: (field: keyof FormData, value: string) => void;
}

export default function StepPassword({ form, errors, set }: Props) {
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
      <Input
        type="password"
        placeholder="Minimum 8 characters"
        value={form.password}
        onChange={(e) => set("password", e.target.value)}
        error={errors.password}
      />
      <Label>Confirm Password *</Label>
      <Input
        type="password"
        placeholder="Repeat password"
        value={form.confirmPassword}
        onChange={(e) => set("confirmPassword", e.target.value)}
        error={errors.confirmPassword}
      />
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
