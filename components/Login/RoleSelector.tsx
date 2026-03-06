// components/Login/RoleSelector.tsx
import { UserRole } from "@/types/loginTypes";
import RolePill from "./RollPill";

export default function RoleSelector({
  role,
  setRole,
}: {
  role: UserRole;
  setRole: (role: UserRole) => void;
}) {
  return (
    <div className="flex gap-1.5 p-1 bg-slate-900 rounded-xl border border-slate-800 mb-6">
      <RolePill
        role="ORG_ADMIN"
        active={role === "ORG_ADMIN"}
        onClick={() => setRole("ORG_ADMIN")}
      />
      <RolePill
        role="STAFF"
        active={role === "STAFF"}
        onClick={() => setRole("STAFF")}
      />
    </div>
  );
}
