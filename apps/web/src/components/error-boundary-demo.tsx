import { useErrorBoundary } from "react-error-boundary";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

/**
 * Example component demonstrating how to trigger errors
 * This is for testing purposes - you can remove this in production
 */
export function ErrorBoundaryDemo() {
  const { showBoundary } = useErrorBoundary();

  const triggerError = () => {
    throw new Error("This is a test error triggered by the demo button");
  };

  const triggerAsyncError = async () => {
    try {
      // Simulate async operation that fails
      await new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Async operation failed!")), 500);
      });
    } catch (error) {
      // Manually trigger the error boundary for async errors
      showBoundary(error);
    }
  };

  return (
    <Card className="p-6 space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Error Boundary Demo</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Test the error boundary by triggering different types of errors.
        </p>
      </div>

      <div className="flex gap-3">
        <Button onClick={triggerError} variant="destructive">
          Trigger Sync Error
        </Button>
        <Button onClick={triggerAsyncError} variant="outline">
          Trigger Async Error
        </Button>
      </div>

      <div className="text-xs text-muted-foreground border-t pt-3">
        <p className="font-semibold mb-1">Note:</p>
        <p>Remove this component in production. It's only for testing the error boundary.</p>
      </div>
    </Card>
  );
}
