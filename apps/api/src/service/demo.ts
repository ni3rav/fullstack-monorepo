// Service for demo endpoints

export function getDemoData() {
  return {
    message: "Hello from the demo endpoint!",
    time: new Date().toISOString(),
  };
}

export function demoMutation(input: string) {
  // Simulate mutation logic
  console.log(input)
  return {
    result: `Received: ${input}`,
  };
}
