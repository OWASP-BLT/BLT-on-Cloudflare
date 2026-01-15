"use client";

import { ReactNode } from "react";
import { useAuth } from "../hooks/use-auth";

export function AuthProvider({ children }: { children: ReactNode }) {
  useAuth(); // hydrate user on mount
  return <>{children}</>;
}
