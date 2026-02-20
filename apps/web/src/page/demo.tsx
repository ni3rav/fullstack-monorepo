import { useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { useDemoData, useDemoMutation } from "../hooks/use-demo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PageContainer } from "@/components/page-container";
import { demoMutationSchema } from "../validations/demo";

export function DemoPage() {
  const { data, isPending, error } = useDemoData();
  const mutation = useDemoMutation();

  const [input, setInput] = useState("");
  const debouncedInput = useDebounce(input, 500); // 500ms debounce
  const [inputError, setInputError] = useState<string | null>(null);


  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = demoMutationSchema.safeParse({ input: debouncedInput });
    if (!parsed.success) {
      setInputError(parsed.error.issues[0]?.message || "Invalid input");
      return;
    }
    setInputError(null);
    mutation.mutate(parsed.data);
  }

  return (
    <PageContainer>
      <h1 className="text-2xl font-bold mb-4">Demo Data Fetch & Mutation</h1>
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Fetch Demo Data</h2>
        {isPending ? (
          <div className="text-muted-foreground">Loading...</div>
        ) : error ? (
          <div className="text-destructive">{error.message}</div>
        ) : (
          <pre className="bg-muted p-4 rounded-md">
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
      </div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <h2 className="text-lg font-semibold">Demo Mutation</h2>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type something..."
        />
        {inputError && <div className="text-destructive">{inputError}</div>}
        <Button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? "Mutating..." : "Submit"}
        </Button>
        {mutation.isError && (
          <div className="text-destructive">
            {mutation.error instanceof Error
              ? mutation.error.message
              : "An unknown error occurred"}
          </div>
        )}
      </form>
    </PageContainer>
  );
}
