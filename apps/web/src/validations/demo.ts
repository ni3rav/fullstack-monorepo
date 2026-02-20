import { z } from "zod";

export const demoMutationSchema = z.object({
  input: z.string().min(1, "Input is required").max(100, "Input too long"),
});

export type DemoMutationInput = z.infer<typeof demoMutationSchema>;
