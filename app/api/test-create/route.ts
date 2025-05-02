import { NextResponse } from "next/server";
import { createEmptyInvoice } from "@/app/actions";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, name } = body;

  try {
    await createEmptyInvoice(email, name);
    return NextResponse.json({ message: "Facture créée avec succès" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erreur lors de la création" }, { status: 500 });
  }
}
