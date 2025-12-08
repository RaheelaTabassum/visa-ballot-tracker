import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("visaDB");

    const visas = await db.collection("visas").find({}).toArray();

    return Response.json({ success: true, data: visas });
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db("visaDB");

    const result = await db.collection("visas").insertOne(body);

    return Response.json({ success: true, id: result.insertedId });
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}
