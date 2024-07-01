import { NextRequest, NextResponse } from "next/server";
import { dbconnect } from "@/utils/config/mongoConfig";
import { User } from "@/utils/model/User";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";

export async function POST(req: NextRequest, res: NextResponse) {
  const { email, password } = await req.json();
  await dbconnect();
  try {
    const dbuser = await User.findOne({ email });
    // console.log(dbuser)
    if (!dbuser) {
      return NextResponse.json({ error: "user not found" });
    }
    const isValid = await bcrypt.compare(password, dbuser.password);
    if (!isValid) {
      return NextResponse.json({ error: "invalid credentials" });
    }


    // create payload to generate token
    const payload = {
        id:dbuser._id,
        name:dbuser.name,
        email: dbuser.email
    }
    
    // here we are using jose to generate token
    const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10 minutes") // set to 1 minute to check token expiry functionality
    .sign(new TextEncoder().encode(process.env.SECRET_KEY));

    const response = NextResponse.json({message: "user logged in successfully"})
    response.cookies.set(
        "AccessToken", 
        token,
        {
            httpOnly: true,
        }
    );
    return response;
  } catch (error:any) {
    console.log(error.message);
    
  }
}
