"use server";
import { LoginFormSchema } from "@/schemas";
import * as z from "zod";

export const login = async (values: z.infer<typeof LoginFormSchema>) => {
  const validatedFields = LoginFormSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Form Submission Error!" };
  }
  return { success: "Email Sent!" };
};
