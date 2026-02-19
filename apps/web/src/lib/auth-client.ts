import { createAuthClient } from "better-auth/react";

import { env } from "@/lib/env";

export const authClient = createAuthClient({
  baseURL: env.VITE_SERVER_BASE_URL,
  fetchOptions: {
    credentials: "include",
  },
});
