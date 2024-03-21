"use server";
import { RegisterFormSchema } from "@/schemas";
import * as z from "zod";

export const register = async (values: z.infer<typeof RegisterFormSchema>) => {
  const validatedFields = RegisterFormSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Form Submission Error!" };
  }
  return { success: "Registration Sucessful" };
};
