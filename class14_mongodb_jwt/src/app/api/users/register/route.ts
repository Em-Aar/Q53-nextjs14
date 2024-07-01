import { NextRequest, NextResponse } from "next/server";
import { dbconnect } from "@/utils/config/mongoConfig";
import { User } from "@/utils/model/User";
import bcrypt from "bcryptjs";
export async function POST(req: NextRequest, res: NextResponse) {
  await dbconnect();
  try {
    const { name, email, password } = await req.json();

    // Todo: Validation of data

    const dbuser = await User.findOne({ email });
    console.log(dbuser);
    if (dbuser) {
      return NextResponse.json({ error: "user already exists" });
    }

    // database query:
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    return NextResponse.json({message: "user created successfully"});
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Internal Server Error" }); 
  }
}
