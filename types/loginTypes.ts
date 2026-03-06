
export type UserRole = "ORG_ADMIN" | "STAFF";

export interface User {
    id: string;
    fullName: string;
    email: string;
    role: UserRole;
    organizationId: string;
    warehouseId: string | null;
}

export interface LoginResponse {
    success: boolean;
    message?: string;
    accessToken?: string;
    refreshToken?: string;
    user?: User;
}