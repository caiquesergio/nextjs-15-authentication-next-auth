"use client";
import { login } from "@/lib/actions/auth";

export const SignInButton = async () => {
  await login()
  return <></>
};
