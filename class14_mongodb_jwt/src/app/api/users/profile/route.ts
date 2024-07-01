import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
  try {
    const userName = request.cookies.get("user")?.value;
    if (!userName) {
      return NextResponse.json({ error: "User not found" });
    }

    return NextResponse.json({ data: userName });
  } catch (error) {
    return NextResponse.json({ error: "some error" });
  }
}
