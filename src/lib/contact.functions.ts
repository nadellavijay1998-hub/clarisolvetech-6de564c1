import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(5, "Phone is required").max(40),
  businessType: z.string().trim().min(1).max(60),
  service: z.string().trim().min(1).max(60),
  message: z.string().trim().min(10, "Please add a short message").max(2000),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => ContactSchema.parse(data))
  .handler(async ({ data }) => {
    // Server-side log so submissions are visible in server function logs.
    // Wire to a database (Lovable Cloud) or email provider when needed.
    console.log("[contact] new lead", {
      ...data,
      receivedAt: new Date().toISOString(),
    });
    return { ok: true as const };
  });
