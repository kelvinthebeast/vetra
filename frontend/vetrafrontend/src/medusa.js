import Medusa from "@medusajs/medusa-js";

const medusa = new Medusa({
  baseUrl: import.meta.env.VITE_MEDUSA_BACKEND_URL,
  maxRetries: 3,
  publishableApiKey: import.meta.env.VITE_MEDUSA_PUBLISHABLE_KEY,
});

export default medusa;
