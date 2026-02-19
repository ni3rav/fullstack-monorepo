import { Navigate, Outlet, useLocation } from "react-router-dom";

import { Spinner } from "@/components/ui/spinner";
import { authClient } from "@/lib/auth-client";

export function RouteProtector() {
  const location = useLocation();
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="grid min-h-[60vh] place-items-center">
        <Spinner />
      </div>
    );
  }

  if (!session) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return <Outlet />;
}
