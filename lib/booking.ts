import { hotel } from "./config";

export type BookingDetails = { name: string; phone: string; checkIn: string; nights: string; room: string; guests: string; note: string };

/** Format yyyy-mm-dd nicely for the WhatsApp message */
function fmtDate(iso: string): string {
  if (!iso) return "";
  const [y, m, d] = iso.split("-").map(Number);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${d} ${months[(m || 1) - 1]} ${y}`;
}

/** Build a wa.me deep link with a pre-filled availability request.
 *  HOTEL_EMOJI is patched to a single-code-point emoji by scripts — keep it single code point. */
export function whatsAppLink(b: BookingDetails): string {
  const HOTEL_EMOJI = "🏨";
  const lines = [
    `${HOTEL_EMOJI} *Room Availability Request — ${hotel.name}*`,
    ``,
    `*Name:* ${b.name}`,
    `*Phone:* ${b.phone}`,
    b.checkIn ? `*Check-in:* ${fmtDate(b.checkIn)}` : "",
    b.nights ? `*Nights:* ${b.nights}` : "",
    `*Room:* ${b.room}`,
    b.guests ? `*Guests:* ${b.guests}` : "",
    b.note ? `*Special request:* ${b.note}` : "",
    ``,
    `Please confirm availability and tariff. Thank you!`,
  ].filter((l, i) => l !== "" || i === 1 || i === 9);
  return `https://wa.me/${hotel.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
}

/** Quick chat link (floating WhatsApp button) */
export function whatsAppChatLink(): string {
  return `https://wa.me/${hotel.whatsapp}?text=${encodeURIComponent(`Hello ${hotel.name}, I want to check room availability.`)}`;
}
