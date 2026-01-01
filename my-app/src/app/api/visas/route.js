export const dynamic = "force-dynamic";

import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("visaDB");

    const visas = await db.collection("visas").find({}).toArray();

    return NextResponse.json(visas);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch visas" },
      { status: 500 }
    );
  }
}
