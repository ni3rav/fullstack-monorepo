import { api } from "../lib/api-client";
import type {
  DemoResponse,
  DemoMutationInput,
  DemoMutationResponse,
} from "../types/demo";

export function fetchDemo() {
  return api.get<DemoResponse>("/api/demo");
}

export function mutateDemo(input: DemoMutationInput) {
  return api.post<DemoMutationResponse, DemoMutationInput>(
    "/api/demo-mutate",
    input,
  );
}
