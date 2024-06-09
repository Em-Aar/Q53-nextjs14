"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const signUpSchema = z
  .object({
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
        "Minimum 1 lowecase, 1 uppercase, 1 digit and 1 special character"
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function ZodForm() {
  //   type Inputs = {
  //     name: string;
  //     email: string;
  //     password: string;
  //     confirmPassword: string;
  //   };

  type Inputs = z.infer<typeof signUpSchema>;
  const {
    register,
    handleSubmit,
    // getValues,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({ resolver: zodResolver(signUpSchema) });

  console.log(errors);

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    await new Promise((r) => setTimeout(r, 2000));
    console.log(data);
    reset();
    // send to server
  };

  return (
    <main className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-slate-100 px-10 py-4 shadow-md rounded max-w-sm flex flex-col justify-between"
      >
        <h1 className="text-3xl font-bold text-gray-700">Sign Up</h1>
        <div className="mt-6">
          {/* Name Field */}
          <div className="pb-4">
            <input
              {...register(
                "name"
                //      {
                //     minLength: { value: 3, message: "Minimum 3 characters" },
                //     required: true,
                //     maxLength: 20,
                //   }
              )}
              type="text"
              name="name"
              placeholder="Name"
              className="mt-1 w-full rounded text-sm p-2"
            />
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="pb-4">
            <input
              {...register(
                "email"
                //      {
                //     required: { value: true, message: "Email is required" },
                //   }
              )}
              type="email"
              name="email"
              placeholder="Email"
              className="mt-1 w-full rounded  text-sm p-2"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="pb-4">
            <input
              {...register(
                "password"
                //      {
                //     required: true,
                //     minLength: 8,
                //     pattern: {
                //       value:
                //         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                //       message:
                //         "must be 1 lowercase, 1 uppercase, 1 digit and 1 sepcial character",
                //     },
                //   }
              )}
              type="text"
              name="password"
              placeholder="Password"
              className="block mt-1 w-full rounded  text-sm p-2"
            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="pb-4">
            <input
              {...register(
                "confirmPassword"
                //      {
                //     required: true,
                //     validate: (value) =>
                //       value === getValues("password") || "Passwords do not match",
                //   }
              )}
              type="text"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="mt-1 w-full rounded text-sm p-2"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs">
                {errors.confirmPassword.message}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`mt-4 w-full bg-teal-500 text-white p-2 rounded ${
                isSubmitting ? "opacity-50 cursor-none" : "opacity-100"
              } `}
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
