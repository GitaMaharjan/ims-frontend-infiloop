// services/register.ts
import { FormData } from "@/types/registerTypes"; // make sure FormData type is imported

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL

export async function checkOrgName(name: string): Promise<boolean> {

    const res = await fetch(`${BACKEND_URL}/organization/check`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
    });

    if (!res.ok) throw new Error("Server error");

    const data = await res.json();
    return data.exists as boolean;
}

export async function checkEmail(email: string): Promise<boolean> {

    const res = await fetch(`${BACKEND_URL}/organization/check`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
    });
    const data = await res.json();
    return data.exists as boolean;
}

export async function registerOrganization(form: FormData) {
    try {

        const response = await fetch(`${BACKEND_URL}/organization/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: form.name,
                address: form.address,
                contactPerson: {
                    name: form.contactName,
                    email: form.email,
                    phone: form.phone,
                    designation: form.designation,
                },
                password: form.password,
            }),
        });
        if (response.ok) {
            const result = await response.json();
            return {
                success: true,
                message: "Organization registered successfully",
                data: result,
            };
        } else {
            const error = await response.json();
            return {
                success: false,
                message: error.message || "Failed to register organization",
            };
        }
    } catch (error) {
        console.error("Server action error:", error);
        return {
            success: false,
            message: "An error occurred during registration. Please try again.",
        };
    }
}