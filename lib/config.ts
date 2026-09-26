/**
 * ─────────────────────────────────────────────────────────────
 *  REBRAND SPOT — change everything here to rebrand the demo
 *  for a real prospect in ~10 minutes before a meeting.
 * ─────────────────────────────────────────────────────────────
 */
export const hotel = {
  name: "Hotel Kesar Palace",
  shortName: "Kesar Palace",
  nameHi: "होटल केसर पैलेस",
  city: "Ujjain",
  address: "12, Mahakal Marg, Near Mahakaleshwar Temple, Ujjain, Madhya Pradesh 456006",
  addressHi: "12, महाकाल मार्ग, महाकालेश्वर मंदिर के पास, उज्जैन, मध्य प्रदेश 456006",
  phone: "+91 92024 20455",
  phoneRaw: "+919202420455",
  whatsapp: "919202420455",
  email: "stay@kesarpalace.in",
  established: 2011,
  distance: "300 m",
  mapEmbed: "https://www.google.com/maps?q=Mahakaleshwar+Temple,+Ujjain,+Madhya+Pradesh&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Mahakaleshwar+Temple+Ujjain",
  timings: {
    en: [
      { days: "Check-in / Check-out", hours: "12:00 PM / 11:00 AM (24×7 front desk)" },
      { days: "Bhasma Aarti assistance", hours: "Early check-in & wake-up call from 3:00 AM" },
    ],
    hi: [
      { days: "चेक-इन / चेक-आउट", hours: "दोपहर 12:00 / सुबह 11:00 (फ्रंट डेस्क 24×7)" },
      { days: "भस्म आरती सहायता", hours: "सुबह 3:00 बजे से अर्ली चेक-इन व वेक-अप कॉल" },
    ],
  },
};

// Back-compat aliases so shared components can keep a stable import
export const inst = hotel;
export const clinic = hotel;

export const img = {
  rooms: [
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1000&q=80",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1000&q=80",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1000&q=80",
  ],
  hero: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80",
  heroAlt: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1600&q=80",
  temple: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1200&q=80",
  gallery: [
    "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=900&q=80",
    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80",
    "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=900&q=80",
    "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=900&q=80",
    "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=900&q=80",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=900&q=80",
  ],
  about: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80",
  aboutAlt: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=80",
  cta: "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=1600&q=80",
  food: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1000&q=80",
  corridor: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1000&q=80",
};
