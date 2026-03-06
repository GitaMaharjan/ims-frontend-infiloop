
import { LoginResponse } from "@/types/loginTypes";

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL;

export async function loginUser(email: string, password: string): Promise<LoginResponse> {
    const res = await fetch(`${BACKEND_URL}/organization/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || "Login failed");
    }

    return data;
}