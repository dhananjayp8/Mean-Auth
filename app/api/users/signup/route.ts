import { connect } from "@/database/dbConnection";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
// var bcrypt=require("bcryptjs");
import bcryptjs from "bcryptjs";

connect();
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { username, email, password } = body;
    const data = { username, email, password };

    let user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { error: "User Already exists" },
        { status: 400 }
      );
    }
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    return NextResponse.json(
      { message: "User registered Successfully!" },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
