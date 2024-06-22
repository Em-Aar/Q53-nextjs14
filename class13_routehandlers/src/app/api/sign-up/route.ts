import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
    const data = await request.json();
    console.log(data);

    //TODO: validate data through zod

    
    
    // send data to database

    return NextResponse.json(
        {
            success:true,
            message:`${data.name} registered successfully`
        }
    );

}