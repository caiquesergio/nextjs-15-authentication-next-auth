"use server";

import { signIn, signOut } from "@/auth";

export const login = async () => {
  await signIn("okta", { redirectTo: "/" });
};

export const logout = async () => {
  await signOut({ redirectTo: "/" });
};
