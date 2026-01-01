import { connectDB } from "@/lib/mongodb";

export async function GET() {
  try {
    await connectDB();
    return Response.json({ ok: true });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "DB connection failed" }),
      { status: 500 }
    );
  }
}
