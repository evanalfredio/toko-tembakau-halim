import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Returns "#" while `whatsapp` is still a placeholder token (no digits).
// wa.me requires the international format (62...), so a local "0" prefix is swapped for "62".
export function getWhatsAppLink(whatsapp: string, message?: string) {
  const digits = whatsapp.replace(/\D/g, "");
  if (!digits) return "#";
  const international = digits.startsWith("0") ? `62${digits.slice(1)}` : digits;
  const base = `https://wa.me/${international}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

// Returns "#" while `email` is still a placeholder token (e.g. "[EMAIL]").
export function getEmailLink(email: string) {
  const cleaned = email.trim();
  if (!cleaned || cleaned.startsWith("[")) return "#";
  return `mailto:${cleaned}`;
}
