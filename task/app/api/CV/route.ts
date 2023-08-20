import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  const client = await clientPromise;
  const collection = client.db().collection("CV");

  try {
    const CV = await collection.find({}).toArray();
    return NextResponse.json(CV, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const client = await clientPromise;
  const collection = client.db().collection("CV");
  const { data } = await req.json();
  try {
    const CV = { data: data };
    await collection.insertOne(CV);
    return NextResponse.json(CV, { status: 201 });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const { id, text, complated } = await req.json();
  const client = await clientPromise;
  const collection = client.db().collection("CV");
  try {
    await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { text, complated } }
    );
    return NextResponse.json({ messege: "updated successfully" });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}
