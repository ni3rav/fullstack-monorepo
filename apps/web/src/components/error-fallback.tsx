import { type FallbackProps } from "react-error-boundary";
import { PageContainer } from "./page-container";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  console.error(`Error captuered:
    ${error}`);
  return (
    <PageContainer className="min-h-screen flex justify-center items-center">
      <Card className="max-w-lg w-full p-6 space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-destructive">
            Oops! Something went wrong
          </h2>
          <p className="text-muted-foreground">
            We're sorry, but an unexpected error occurred. Please try again.
          </p>
          <Button onClick={resetErrorBoundary} variant="default">
            Try Again
          </Button>
          <Button
            onClick={() => (window.location.href = "/")}
            variant="outline"
          >
            Go to Home
          </Button>
        </div>
      </Card>
    </PageContainer>
  );
}
