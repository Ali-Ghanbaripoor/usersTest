/**
 * Users
 */
import { Accounting } from "../Login/interfaces/Auth";
type FingerprintCondition = "register" | "change" | "delete";
export interface Users {
    success: boolean;
    data: UserData[];
    status: number;
}
export interface UserData extends Accounting {
    password: string;
    condition: FingerprintCondition;
    created_at: string;
    updated_at: string;
}
export interface UserViewStates {
    users: UserData[];
    usersListLoad: boolean;
    usersListFailureFetch: boolean;
    usersListEmpty: boolean;
    removalUserDialog: boolean;
    removalUserFingersDialog: boolean;
    removalUserId: string;
    removeFingersLoad: boolean;
    removeUserLoad: boolean;
    callToSupport: boolean;
    supportLabel: string;
}
export interface UsersViewIndicators {
    loadUsers: boolean;
    failedLoadUsers: boolean;
}
export {};
