import { connect } from "@/database/dbConnection";
import { NextRequest, NextResponse } from "next/server";

connect();
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { username, email, password } = body;
    const data = { username, email, password };
    console.log(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
