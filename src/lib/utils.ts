import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// clsx est une librairie qui te permet d’écrire des classes conditionnelles facilement.
// Exemple : clsx("btn", condition && "active") renvoie "btn active" si condition est vraie.

// twMerge est une fonction qui fusionne les classes Tailwind CSS en supprimant les doublons et en gardant la dernière valeur.
// Par exemple, si tu écris "bg-red-500 bg-blue-500", twMerge renverra "bg-blue-500".

// ClassValue est juste le type TypeScript que clsx accepte (string, array, object, etc).

/** Ex: <div className={cn("p-2", isActive && "bg-orange-500", "p-4")} />
  Ce que fait cn() ici :
    clsx(...) va retourner : "p-2 bg-orange-500 p-4" si isActive est true
    twMerge(...) fusionne p-2 + p-4 → garde p-4 seulement
    Résultat final : "bg-orange-500 p-4"
 */
