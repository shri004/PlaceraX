import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "PlaceraX", // Unique app ID
  name: "PlaceraX",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
