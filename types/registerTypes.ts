// ─── Organization ─────────────────────────────
export interface OrgDetails {
    name: string;
    address: string;
}

// ─── Admin ───────────────────────────────────
export interface AdminDetails {
    contactName: string;
    email: string;
    phone: string;
    designation: string;
}

// ─── Password ────────────────────────────────
export interface PasswordDetails {
    password: string;
    confirmPassword: string;
}

// ─── Combined Form ───────────────────────────
export interface FormData extends OrgDetails, AdminDetails, PasswordDetails { }

// ─── Step status ────────────────────────────
export type StepStatus = "idle" | "checking" | "error" | "ok";