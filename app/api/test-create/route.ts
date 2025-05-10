// Import de NextResponse pour retourner une réponse HTTP
import { NextResponse } from "next/server";
// Import de la fonction métier de création de facture
import { createEmptyInvoice } from "@/app/actions";

// Handler de la méthode POST pour l’API
export async function POST(request: Request) {
  // Récupère les données envoyées dans la requête (email + nom de facture)
  const body = await request.json();
  const { email, name } = body;

  try {
    // Appelle la fonction de création de facture
    await createEmptyInvoice(email, name);

    // Retourne une réponse JSON de succès
    return NextResponse.json({ message: "Facture créée avec succès" });
  } catch (error) {
    // En cas d’erreur, log dans la console et retourne un message d’erreur
    console.error(error);
    return NextResponse.json({ error: "Erreur lors de la création" }, { status: 500 });
  }
}
