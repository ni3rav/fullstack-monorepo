import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { authClient } from "@/lib/auth-client";

export function DashboardPage() {
  const { data: session } = authClient.useSession();

  return (
    <Card className="max-w-2xl">
      <CardHeader>
        <CardTitle>Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Signed in as {session?.user.email ?? "Unknown user"}
        </p>
      </CardContent>
    </Card>
  );
}
