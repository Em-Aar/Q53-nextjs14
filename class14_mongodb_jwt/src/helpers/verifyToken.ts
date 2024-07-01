import { jwtVerify } from "jose";

export const verifyToken = async (token:any) => {
  try {
    const secret = new TextEncoder().encode(process.env.SECRET_KEY!);
    const {payload} = await jwtVerify(token, secret);
    console.log("payload in verify Token",payload);
    console.log("token verfied");
    return payload.name;
  } catch (error: any) {
    console.log("error in verify token ");
    return null
  }
};

