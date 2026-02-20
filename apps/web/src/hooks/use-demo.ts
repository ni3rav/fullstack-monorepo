import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchDemo, mutateDemo } from "../api/demo-api";
import { toast } from "sonner";
import { demoMutationSchema } from "../validations/demo";
import type { DemoMutationInput } from "../types/demo";

export function useDemoData() {
  const query = useQuery({
    queryKey: ["demo-data"],
    queryFn: fetchDemo,
  });

  if (query.isError) {
    const error = query.error;
    if (error instanceof Error) {
      toast.error(error.message);
    } else {
      toast.error("Failed to fetch demo data");
    }
  }

  return query;
}

export function useDemoMutation() {
  return useMutation({
    mutationFn: (input: DemoMutationInput) => {
      const parsed = demoMutationSchema.safeParse(input);
      if (!parsed.success) {
        // ZodError.issues is the correct property
        throw new Error(parsed.error.issues[0]?.message || "Invalid input");
      }
      return mutateDemo(parsed.data);
    },
    onSuccess: (data) => {
      toast.success(data.result);
    },
    onError: (error: unknown) => {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Mutation failed");
      }
    },
  });
}
