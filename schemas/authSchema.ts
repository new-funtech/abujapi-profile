import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("validation.invalidEmail"),
  password: z.string().min(6, "validation.passwordTooShort"),
});

export const registerSchema = z.object({
  name: z.string().min(2, "validation.nameTooShort"),
  email: z.string().email("validation.invalidEmail"),
  password: z.string().min(6, "validation.passwordTooShort"),
});
