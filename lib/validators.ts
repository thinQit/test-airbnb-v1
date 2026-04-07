import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  topic: z.enum([
    "Booking help",
    "Experiences",
    "Hosting",
    "Pricing question",
    "Other",
  ]),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
});

export const hostSignupSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters").max(120),
  email: z.string().email("Invalid email address").max(255),
  city: z.string().min(2, "City must be at least 2 characters").max(120),
  listingType: z.enum(["Entire place", "Private room", "Shared room", "Experience"]),
  notes: z.string().max(2000).optional().or(z.literal("")),
});

export const listingsQuerySchema = z.object({
  location: z.string().min(1).max(120).optional(),
  guests: z.coerce.number().int().min(1).max(16).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type HostSignupInput = z.infer<typeof hostSignupSchema>;
export type ListingsQueryInput = z.infer<typeof listingsQuerySchema>;
