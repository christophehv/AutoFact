import { updateInvoice } from "@/app/actions";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const invoice = body.invoice;

    await updateInvoice(invoice);

    return NextResponse.json({ message: "Facture mise à jour avec succès" });
  } catch (error) {
    console.error("Erreur lors de la mise à jour :", error);
    return NextResponse.json({ error: "Échec de la mise à jour" }, { status: 500 });
  }
}
