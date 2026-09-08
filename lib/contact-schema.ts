import { z } from "zod";

import { serviceSlugs } from "@/data/servicesData";

export const budgetBrackets = [
  "25k-50k",
  "50k-100k",
  "100k-250k",
  "250k-plus",
] as const;

export const budgetLabels: Record<(typeof budgetBrackets)[number], string> = {
  "25k-50k": "$25,000 – $50,000",
  "50k-100k": "$50,000 – $100,000",
  "100k-250k": "$100,000 – $250,000",
  "250k-plus": "$250,000+",
};

export const contactSchema = z.object({
  name: z.string().min(2, "Enter your full name."),
  email: z
    .string()
    .email("Enter a valid work email.")
    .refine((value) => !value.endsWith("@example.com"), "Use your company email."),
  service: z.enum(serviceSlugs, {
    required_error: "Select a service.",
  }),
  budget: z.enum(budgetBrackets, {
    required_error: "Select a budget bracket.",
  }),
  message: z.string().min(24, "Share a brief of at least 24 characters."),
  estimateNote: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
