"use client";

import { FormEvent, useMemo, useState } from "react";
import { useLang } from "@/lib/lang";
import { rooms } from "@/lib/content";
import { whatsAppLink } from "@/lib/booking";
import { hotel } from "@/lib/config";

export type BookingStyles = {
  wrap: string;
  label: string;
  input: string;
  select: string;
  submit: string;
  success: string;
  error: string;
};

export default function BookingForm({ styles }: { styles: BookingStyles }) {
  const { lang, t } = useLang();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [nights, setNights] = useState("");
  const [room, setRoom] = useState("");
  const [guests, setGuests] = useState("");
  const [note, setNote] = useState("");
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const b = t.booking;

  function submit(e: FormEvent) {
    e.preventDefault();
    const digits = phone.replace(/\D/g, "");
    if (!name.trim()) return setMsg({ ok: false, text: lang === "en" ? "Please enter your name." : "कृपया अपना नाम लिखें।" });
    if (digits.length < 10 || digits.length > 12) return setMsg({ ok: false, text: lang === "en" ? "Please enter a valid 10-digit mobile number." : "कृपया सही 10 अंकों का मोबाइल नंबर लिखें।" });
    if (!checkIn) return setMsg({ ok: false, text: lang === "en" ? "Please select your check-in date." : "कृपया चेक-इन तारीख चुनें।" });
    setMsg({ ok: true, text: b.success });
    window.open(
      whatsAppLink({ name: name.trim(), phone: digits, checkIn, nights: nights || b.nightsOpts[0], room: room || b.roomAny, guests: guests || b.guestsOpts[0], note: note.trim() }),
      "_blank"
    );
  }

  return (
    <form onSubmit={submit} className={styles.wrap} noValidate>
      <div>
        <label className={styles.label}>{b.name} *</label>
        <input className={styles.input} value={name} onChange={(e) => setName(e.target.value)} placeholder={b.namePh} />
      </div>
      <div>
        <label className={styles.label}>{b.phone} *</label>
        <input className={styles.input} type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={b.phonePh} />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className={styles.label}>{b.checkin} *</label>
          <input className={styles.input} type="date" min={today} value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
        </div>
        <div>
          <label className={styles.label}>{b.nights}</label>
          <select className={styles.select} value={nights} onChange={(e) => setNights(e.target.value)}>
            {b.nightsOpts.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className={styles.label}>{b.room}</label>
          <select className={styles.select} value={room} onChange={(e) => setRoom(e.target.value)}>
            <option value="">{b.roomAny}</option>
            {rooms.map((r) => (
              <option key={r.en.title} value={`${r.en.title} (${r.price})`}>
                {r[lang].title} — {r.price}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={styles.label}>{b.guests}</label>
          <select className={styles.select} value={guests} onChange={(e) => setGuests(e.target.value)}>
            {b.guestsOpts.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className={styles.label}>{b.note}</label>
        <textarea className={styles.input} rows={3} value={note} onChange={(e) => setNote(e.target.value)} placeholder={b.notePh} />
      </div>
      {msg && <p className={msg.ok ? styles.success : styles.error}>{msg.text}</p>}
      <button type="submit" className={styles.submit}>
        <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current shrink-0" aria-hidden>
          <path d="M16 .8C7.6.8.8 7.6.8 16c0 2.7.7 5.3 2 7.6L.8 31.2l7.8-2c2.2 1.2 4.7 1.9 7.4 1.9 8.4 0 15.2-6.8 15.2-15.2S24.4.8 16 .8zm7.1 18.2c-.4-.2-2.3-1.1-2.6-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.3 1.5-.2.3-.5.3-.9.1-.4-.2-1.6-.6-3.1-1.9-1.1-1-1.9-2.3-2.1-2.6-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.6.1-.3 0-.5 0-.7-.1-.2-.9-2.1-1.2-2.9-.3-.8-.6-.7-.9-.7h-.8c-.3 0-.7.1-1 .5-.4.4-1.4 1.3-1.4 3.2s1.4 3.7 1.6 4c.2.3 2.8 4.2 6.7 5.9.9.4 1.7.6 2.2.8.9.3 1.8.3 2.5.2.8-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.1-.2-.4-.3-.8-.5z" />
        </svg>
        {b.submit}
      </button>
      <p className="text-center text-sm opacity-70">
        {b.or}{" "}
        <a href={`tel:${hotel.phoneRaw}`} className="underline font-semibold">
          {b.call}: {hotel.phone}
        </a>
      </p>
    </form>
  );
}
