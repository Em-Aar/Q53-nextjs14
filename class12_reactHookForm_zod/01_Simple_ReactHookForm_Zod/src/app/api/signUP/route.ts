import { signUpSchema } from "@/lib/types";
import { NextResponse } from "next/server";
export async function POST(request: Request) {
  const data = await request.json();

  const result = signUpSchema.safeParse(data);
  let zodErrors = {};
  if (!result.success) {
    result.error.issues.forEach((issue) => {
      zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
    });
  }

  return NextResponse.json(
    Object.keys(zodErrors).length > 0
      ? {
          success: false,
          errors: zodErrors,
        }
      : {
          success: true,
        }
  );
}
