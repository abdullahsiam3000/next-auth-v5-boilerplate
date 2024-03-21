"use server";
import { db } from "@/lib/db";
import { RegisterFormSchema } from "@/schemas";
import * as z from "zod";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterFormSchema>) => {
  const validatedFields = RegisterFormSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Form Submission Error!" };
  }
  const { email, name, password } = validatedFields.data;
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.create({
    data: { name, email, password: hashedPassword },
  });

  return { success: "Registration Sucessful" };
};
