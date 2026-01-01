import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "DB connection failed" },
      { status: 500 }
    );
  }
}
