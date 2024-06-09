import { z } from "zod";


export const signUpSchema = z.object({
    name: z
      .string()
      .min(3, "Minimum 3 characters")
      .max(20, "Maximun 20 Characters")
      .optional(),
    email: z.string().email("Email is required").min(2, "minimum 2 characters"),
    password: z
      .string()
      .min(8, "Minimum 8 charactrs")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Minimum 1 lowecase, 1 uppercase, i digit and 1 special character"
      ),
      confirmPassword:z.string(),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

  export type Inputs = z.infer<typeof signUpSchema>;