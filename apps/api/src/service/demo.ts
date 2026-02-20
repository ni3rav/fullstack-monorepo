import logger from "@/lib/logger";

// Service for demo endpoints

export function getDemoData() {
  return {
    message: "Hello from the demo endpoint!",
    time: new Date().toISOString(),
  };
}

export function demoMutation(input: string) {
  // Simulate mutation logic
  logger.info({ input }, "Demo mutation called");
  return {
    result: `Received: ${input}`,
  };
}
