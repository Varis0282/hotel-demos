// Shared bilingual content consumed by all 5 hotel themes.
// Same content, different design — that's the pitch.

export type Lang = "en" | "hi";

export const rooms = [
  {
    icon: "BedSingle", photo: 0, price: "₹1,499", per: { en: "per night", hi: "प्रति रात्रि" },
    en: { title: "Standard Room (Non-AC)", occupancy: "2 Adults + 1 Child", desc: "Clean, airy room with fresh linen daily — everything a pilgrim family needs for a comfortable darshan trip.", features: ["Double bed + extra mattress on request", "Hot water 24×7", "Free WiFi & TV", "Temple wake-up call"] },
    hi: { title: "स्टैंडर्ड रूम (नॉन-एसी)", occupancy: "2 वयस्क + 1 बच्चा", desc: "साफ-सुथरा हवादार कमरा, रोज़ ताज़ी चादरें — दर्शन यात्रा के लिए परिवार को जो चाहिए, सब कुछ।", features: ["डबल बेड + माँगने पर अतिरिक्त गद्दा", "24×7 गर्म पानी", "फ्री WiFi व TV", "मंदिर वेक-अप कॉल"] },
  },
  {
    icon: "BedDouble", photo: 1, price: "₹2,499", per: { en: "per night", hi: "प्रति रात्रि" },
    en: { title: "Deluxe Room (AC)", occupancy: "2–3 Guests", desc: "Spacious AC room with premium bedding and a work desk — our most-booked room for couples and small families.", features: ["Split AC + premium bedding", "Tea/coffee kettle", "Temple-side view (select rooms)", "Late checkout on request"] },
    hi: { title: "डीलक्स रूम (एसी)", occupancy: "2–3 अतिथि", desc: "प्रीमियम बिस्तर और वर्क डेस्क के साथ बड़ा एसी कमरा — कपल्स व छोटे परिवारों की सबसे पसंदीदा पसंद।", features: ["स्प्लिट एसी + प्रीमियम बिस्तर", "चाय/कॉफी केतली", "मंदिर की ओर व्यू (चुनिंदा कमरे)", "माँगने पर लेट चेकआउट"] },
  },
  {
    icon: "Users", photo: 2, price: "₹3,999", per: { en: "per night", hi: "प्रति रात्रि" },
    en: { title: "Family Suite", occupancy: "4–6 Guests", desc: "Two connected rooms with a sitting area — ideal for joint families and group yatras. Kids stay free.", features: ["2 rooms + sitting area", "4–6 guests comfortably", "Fridge & dining table", "Free early check-in for Bhasma Aarti"] },
    hi: { title: "फैमिली सुइट", occupancy: "4–6 अतिथि", desc: "बैठक क्षेत्र के साथ दो जुड़े कमरे — संयुक्त परिवार और समूह यात्रा के लिए आदर्श। बच्चों का कोई शुल्क नहीं।", features: ["2 कमरे + बैठक क्षेत्र", "4–6 अतिथि आराम से", "फ्रिज व डाइनिंग टेबल", "भस्म आरती हेतु फ्री अर्ली चेक-इन"] },
  },
];

export const amenities = [
  { icon: "MapPin", en: { title: "300 m from Mahakal", desc: "A 4-minute walk to Shri Mahakaleshwar Jyotirlinga — go for darshan as many times as you wish." }, hi: { title: "महाकाल से 300 मीटर", desc: "श्री महाकालेश्वर ज्योतिर्लिंग तक सिर्फ 4 मिनट पैदल — जितनी बार चाहें दर्शन कीजिए।" } },
  { icon: "Flame", en: { title: "Bhasma Aarti Assistance", desc: "3 AM wake-up call, hot tea before you leave, and guidance for aarti booking — we plan your once-in-a-lifetime morning." }, hi: { title: "भस्म आरती सहायता", desc: "सुबह 3 बजे वेक-अप कॉल, निकलने से पहले गर्म चाय और आरती बुकिंग में मार्गदर्शन — आपकी अनमोल सुबह की पूरी तैयारी हम करते हैं।" } },
  { icon: "Utensils", en: { title: "Pure-Veg Restaurant", desc: "Saatvik Malwa thali, Jain food on request, and early breakfast for aarti-goers — hygienic and homely." }, hi: { title: "शुद्ध शाकाहारी भोजनालय", desc: "सात्विक मालवा थाली, माँगने पर जैन भोजन और आरती जाने वालों के लिए जल्दी नाश्ता — स्वच्छ और घर जैसा।" } },
  { icon: "Bus", en: { title: "Temple Pickup & Drop", desc: "Free auto drop to the temple gate for senior citizens, and railway-station pickup on request." }, hi: { title: "मंदिर पिक-अप व ड्रॉप", desc: "वरिष्ठ नागरिकों के लिए मंदिर द्वार तक फ्री ऑटो ड्रॉप, माँगने पर रेलवे स्टेशन से पिक-अप।" } },
  { icon: "Droplets", en: { title: "Hot Water 24×7", desc: "Round-the-clock hot water — because aarti mornings start at 3 AM, not 7." }, hi: { title: "24×7 गर्म पानी", desc: "चौबीसों घंटे गर्म पानी — क्योंकि आरती की सुबह 3 बजे शुरू होती है, 7 बजे नहीं।" } },
  { icon: "Car", en: { title: "Free Parking", desc: "Secure parking for cars and buses inside the premises — rare this close to the temple." }, hi: { title: "फ्री पार्किंग", desc: "परिसर के अंदर कार व बस की सुरक्षित पार्किंग — मंदिर के इतने पास दुर्लभ सुविधा।" } },
  { icon: "Wifi", en: { title: "Free WiFi & TV", desc: "High-speed WiFi in every room and lobby, LED TV with devotional and news channels." }, hi: { title: "फ्री WiFi व TV", desc: "हर कमरे और लॉबी में हाई-स्पीड WiFi, भक्ति व समाचार चैनलों के साथ LED TV।" } },
  { icon: "Compass", en: { title: "Travel Desk", desc: "Same-day taxi tours: Omkareshwar Jyotirlinga, Kal Bhairav, Ram Ghat, Sandipani Ashram and Indore." }, hi: { title: "ट्रैवल डेस्क", desc: "उसी दिन टैक्सी टूर: ओंकारेश्वर ज्योतिर्लिंग, काल भैरव, राम घाट, सांदीपनि आश्रम और इंदौर।" } },
];

export const reviews = [
  { name: "Suresh Agarwal", area: "Jaipur, Rajasthan", stars: 5, en: "Went for Bhasma Aarti at 3:30 AM — hotel gave wake-up call, hot tea and dropped us at the gate. Darshan made easy. This is why location matters.", hi: "सुबह 3:30 बजे भस्म आरती गए — होटल ने वेक-अप कॉल दी, गर्म चाय पिलाई और गेट तक छोड़ा। दर्शन आसान हो गया। लोकेशन का यही महत्व है।" },
  { name: "Meena Deshpande", area: "Pune, Maharashtra", stars: 5, en: "Travelling with my 78-year-old mother — free auto drop to the temple and ground-floor room on request. Staff treats guests like family.", hi: "78 वर्ष की माँ के साथ यात्रा — मंदिर तक फ्री ऑटो ड्रॉप और माँगने पर ग्राउंड-फ्लोर कमरा। स्टाफ अतिथियों को परिवार जैसा मानता है।" },
  { name: "Rajesh Patidar", area: "Indore, MP", stars: 5, en: "Family suite for 6 people at ₹3,999 near Mahakal is unbeatable. Clean rooms, saatvik food, kids stayed free.", hi: "महाकाल के पास 6 लोगों का फैमिली सुइट ₹3,999 में — इससे अच्छा कुछ नहीं। साफ कमरे, सात्विक भोजन, बच्चों का कोई शुल्क नहीं।" },
  { name: "Kavita Sharma", area: "Delhi", stars: 4, en: "Booked on WhatsApp in 2 minutes, confirmation within 10. Room was exactly as photos. Restaurant thali is a must-try.", hi: "WhatsApp पर 2 मिनट में बुकिंग, 10 मिनट में कन्फर्मेशन। कमरा बिल्कुल फोटो जैसा। भोजनालय की थाली ज़रूर आज़माएँ।" },
  { name: "Venkatesh Iyer", area: "Bengaluru, Karnataka", stars: 5, en: "Came for Mahakal, stayed for the hospitality. Travel desk arranged Omkareshwar same-day trip at honest price.", hi: "महाकाल के लिए आए, आतिथ्य के कायल हो गए। ट्रैवल डेस्क ने ईमानदार दाम पर उसी दिन ओंकारेश्वर यात्रा करा दी।" },
  { name: "Farhana Sheikh", area: "Bhopal, MP", stars: 5, en: "Hot water at 3 AM, early breakfast, polite staff — small things done right. Ujjain's best value stay near the temple.", hi: "सुबह 3 बजे गर्म पानी, जल्दी नाश्ता, विनम्र स्टाफ — छोटी बातें, सही ढंग से। मंदिर के पास उज्जैन का सबसे किफ़ायती ठहराव।" },
];

export const faqs = [
  { en: { q: "How far is the hotel from Mahakaleshwar Temple?", a: "Just 300 metres — a 4-minute walk from our gate to the temple entrance. Senior citizens get a free auto drop." }, hi: { q: "होटल महाकालेश्वर मंदिर से कितनी दूर है?", a: "सिर्फ 300 मीटर — हमारे गेट से मंदिर द्वार तक 4 मिनट पैदल। वरिष्ठ नागरिकों के लिए फ्री ऑटो ड्रॉप।" } },
  { en: { q: "Do you help with Bhasma Aarti booking?", a: "Yes — our front desk guides you through the official booking process and arranges 3 AM wake-up calls, tea and gate drop on aarti day." }, hi: { q: "क्या आप भस्म आरती बुकिंग में मदद करते हैं?", a: "हाँ — फ्रंट डेस्क आधिकारिक बुकिंग प्रक्रिया में मार्गदर्शन करती है और आरती वाले दिन सुबह 3 बजे वेक-अप कॉल, चाय व गेट ड्रॉप की व्यवस्था करती है।" } },
  { en: { q: "What are check-in and check-out timings?", a: "Standard check-in 12 PM, check-out 11 AM. Early check-in from 3 AM for Bhasma Aarti guests is free, subject to availability." }, hi: { q: "चेक-इन और चेक-आउट का समय क्या है?", a: "सामान्य चेक-इन दोपहर 12 बजे, चेक-आउट सुबह 11 बजे। भस्म आरती अतिथियों के लिए सुबह 3 बजे से अर्ली चेक-इन मुफ़्त (उपलब्धता अनुसार)।" } },
  { en: { q: "Is food available in the hotel?", a: "Our in-house pure-veg restaurant serves saatvik Malwa thali, breakfast from 4 AM on aarti days, and Jain food on request. Room service available." }, hi: { q: "क्या होटल में भोजन उपलब्ध है?", a: "हमारा शुद्ध शाकाहारी भोजनालय सात्विक मालवा थाली परोसता है, आरती के दिनों में सुबह 4 बजे से नाश्ता, और माँगने पर जैन भोजन। रूम सर्विस उपलब्ध।" } },
  { en: { q: "Is parking available for cars and buses?", a: "Yes — free secure parking inside the premises for cars, tempo travellers and buses. Very rare this close to the temple." }, hi: { q: "क्या कार व बस पार्किंग उपलब्ध है?", a: "हाँ — परिसर के अंदर कार, टेम्पो ट्रैवलर व बस की फ्री सुरक्षित पार्किंग। मंदिर के इतने पास बहुत दुर्लभ।" } },
  { en: { q: "How do I book a room?", a: "Fill the availability form on this website — it reaches our WhatsApp directly and we confirm within 15 minutes. No advance needed for most dates; pay at check-in." }, hi: { q: "कमरा कैसे बुक करें?", a: "इस वेबसाइट पर उपलब्धता फॉर्म भरें — यह सीधे हमारे WhatsApp पर पहुँचता है और 15 मिनट में कन्फर्मेशन मिलता है। अधिकतर तारीखों पर एडवांस ज़रूरी नहीं; चेक-इन पर भुगतान करें।" } },
];

export const stats = [
  { value: "300 m", en: "From Mahakal Temple", hi: "महाकाल मंदिर से दूरी" },
  { value: "45", en: "Clean, Comfortable Rooms", hi: "स्वच्छ, आरामदायक कमरे" },
  { value: "10,000+", en: "Guests Every Year", hi: "अतिथि प्रति वर्ष" },
  { value: "4.5★", en: "Google Rating", hi: "गूगल रेटिंग" },
];

export const whyUs = [
  { icon: "MapPin", en: { title: "Unbeatable Location", desc: "300 m from the Jyotirlinga. Walk to every aarti — no taxi, no parking stress, no crowd panic." }, hi: { title: "बेजोड़ लोकेशन", desc: "ज्योतिर्लिंग से 300 मीटर। हर आरती में पैदल जाइए — न टैक्सी, न पार्किंग की चिंता, न भीड़ का तनाव।" } },
  { icon: "Flame", en: { title: "Built Around the Aarti", desc: "3 AM wake-up calls, 24×7 hot water, 4 AM breakfast — the whole hotel runs on Mahakal's schedule." }, hi: { title: "आरती के अनुसार व्यवस्था", desc: "सुबह 3 बजे वेक-अप कॉल, 24×7 गर्म पानी, 4 बजे नाश्ता — पूरा होटल महाकाल के समय पर चलता है।" } },
  { icon: "IndianRupee", en: { title: "Honest Pilgrim Pricing", desc: "Rooms from ₹1,499, kids stay free, no hidden charges — even in Sawan and festival season we keep it fair." }, hi: { title: "ईमानदार यात्री दाम", desc: "₹1,499 से कमरे, बच्चों का कोई शुल्क नहीं, कोई छिपा चार्ज नहीं — सावन व त्योहारों में भी दाम वाजिब।" } },
  { icon: "HeartHandshake", en: { title: "Family-Run Warmth", desc: "Run by the same family since 2011. Senior-citizen assistance, ground-floor rooms, and staff that remembers your name." }, hi: { title: "पारिवारिक अपनापन", desc: "2011 से एक ही परिवार द्वारा संचालित। वरिष्ठ नागरिक सहायता, ग्राउंड-फ्लोर कमरे और नाम से पहचानने वाला स्टाफ।" } },
];

export const ui = {
  en: {
    nav: { home: "Home", about: "About Us", rooms: "Rooms & Tariff", amenities: "Amenities", gallery: "Gallery", contact: "Contact & Booking", book: "Check Availability" },
    hero: {
      badge: "300 m from Shri Mahakaleshwar Jyotirlinga",
      title: "Stay Beside Mahakal,",
      titleAccent: "Wake Up to the Aarti",
      sub: "Clean family rooms from ₹1,499, pure-veg restaurant, Bhasma Aarti assistance and a 4-minute walk to darshan — Ujjain's most trusted pilgrim hotel since 2011.",
      cta1: "Check Availability",
      cta2: "Call Now",
      open: "Rooms available · Confirmation in 15 min on WhatsApp",
    },
    sections: {
      roomsTitle: "Rooms & Tariff",
      roomsSub: "Honest prices, spotless rooms — pay at check-in.",
      amenitiesTitle: "Everything a Yatri Needs",
      amenitiesSub: "From 3 AM wake-up calls to same-day Omkareshwar tours.",
      whyTitle: "Why Pilgrims Choose Kesar Palace",
      whySub: "14 years, 10,000+ guests a year, one promise — darshan made easy.",
      reviewsTitle: "What Our Guests Say",
      reviewsSub: "Families from across India, year after year.",
      faqTitle: "Frequently Asked Questions",
      faqSub: "Everything to know before your yatra.",
      galleryTitle: "A Glimpse of Your Stay",
      gallerySub: "Rooms, thali, lobby and the lanes of Mahakal.",
      visitTitle: "Reach Us",
      visitSub: "Mahakal Marg — 300 m from the temple's main gate.",
      ctaTitle: "Mahakal is calling. Your room is ready.",
      ctaSub: "Check availability now — confirmation on WhatsApp within 15 minutes.",
    },
    booking: {
      title: "Check Room Availability",
      sub: "Fill this form — it goes directly to our WhatsApp. We confirm your room within 15 minutes. Pay at check-in.",
      name: "Your Name", namePh: "e.g. Suresh Agarwal",
      phone: "Mobile Number", phonePh: "e.g. 92024 20455",
      checkin: "Check-in Date",
      nights: "Number of Nights", nightsOpts: ["1 night", "2 nights", "3 nights", "4+ nights"],
      room: "Room Type", roomAny: "Suggest the best room for us",
      guests: "Guests", guestsOpts: ["1–2 guests", "3–4 guests", "5–6 guests", "Group (7+)"],
      note: "Special Request (optional)", notePh: "e.g. Bhasma Aarti on first morning, ground-floor room",
      submit: "Check on WhatsApp",
      or: "or",
      call: "Call the hotel",
      success: "Opening WhatsApp… your availability request is ready to send!",
    },
    footer: { rights: "All rights reserved.", quick: "Quick Links", contact: "Contact", hours: "Front Desk", tagline: "Darshan made easy — since 2011." },
    misc: { viewAll: "View All Rooms", experience: "Experience", readMore: "Know More", getDirections: "Get Directions", emergency: "24×7 Front Desk & Booking Helpline", perNight: "per night", bookRoom: "Book This Room" },
    about: {
      title: "About Kesar Palace",
      sub: "A family-run pilgrim hotel, 300 m from Mahakal.",
      story1: "Hotel Kesar Palace was started in 2011 by the Sharma family of Ujjain with one simple thought — a yatri who has travelled a thousand kilometres for Mahakal's darshan deserves a clean bed, hot water and honest prices, right next to the temple.",
      story2: "From 12 rooms then to 45 rooms today — with a pure-veg restaurant, travel desk, bus parking and Bhasma Aarti assistance — we have hosted over one lakh pilgrims from every corner of India, many of whom return every Sawan.",
      story3: "Our promise has never changed: the hotel runs on Mahakal's schedule, not ours. 3 AM wake-up calls, 4 AM breakfast, and a staff that treats every guest like family arriving for a festival.",
      missionTitle: "Our Promise",
      mission: "Every pilgrim family should get darshan-focused comfort at honest prices — 300 metres from Mahakal.",
      values: [
        { title: "Cleanliness First", desc: "Rooms sanitized daily, fresh linen for every guest, spotless bathrooms." },
        { title: "Honest Pricing", desc: "Tariff card at reception. No festival-season fleecing, no hidden charges." },
        { title: "Seva Bhaav", desc: "Senior-citizen assistance, free temple drops, and help with every yatra plan." },
        { title: "Aarti-Ready 24×7", desc: "Hot water, tea and wake-up calls at 3 AM — every single day." },
      ],
    },
  },
  hi: {
    nav: { home: "होम", about: "हमारे बारे में", rooms: "कमरे व किराया", amenities: "सुविधाएँ", gallery: "गैलरी", contact: "संपर्क व बुकिंग", book: "उपलब्धता देखें" },
    hero: {
      badge: "श्री महाकालेश्वर ज्योतिर्लिंग से 300 मीटर",
      title: "महाकाल के पास ठहरिए,",
      titleAccent: "आरती के साथ जागिए",
      sub: "₹1,499 से स्वच्छ पारिवारिक कमरे, शुद्ध शाकाहारी भोजनालय, भस्म आरती सहायता और दर्शन तक 4 मिनट पैदल — 2011 से उज्जैन का सबसे भरोसेमंद यात्री होटल।",
      cta1: "उपलब्धता देखें",
      cta2: "अभी कॉल करें",
      open: "कमरे उपलब्ध · WhatsApp पर 15 मिनट में कन्फर्मेशन",
    },
    sections: {
      roomsTitle: "कमरे व किराया",
      roomsSub: "ईमानदार दाम, बेदाग कमरे — भुगतान चेक-इन पर।",
      amenitiesTitle: "यात्री की हर ज़रूरत",
      amenitiesSub: "सुबह 3 बजे की वेक-अप कॉल से उसी दिन ओंकारेश्वर यात्रा तक।",
      whyTitle: "यात्री केसर पैलेस क्यों चुनते हैं",
      whySub: "14 साल, हर वर्ष 10,000+ अतिथि, एक वादा — दर्शन आसान।",
      reviewsTitle: "हमारे अतिथि क्या कहते हैं",
      reviewsSub: "देश भर के परिवार, साल दर साल।",
      faqTitle: "अक्सर पूछे जाने वाले सवाल",
      faqSub: "यात्रा से पहले हर ज़रूरी जानकारी।",
      galleryTitle: "आपके ठहराव की एक झलक",
      gallerySub: "कमरे, थाली, लॉबी और महाकाल की गलियाँ।",
      visitTitle: "हम तक पहुँचें",
      visitSub: "महाकाल मार्ग — मंदिर के मुख्य द्वार से 300 मीटर।",
      ctaTitle: "महाकाल बुला रहे हैं। आपका कमरा तैयार है।",
      ctaSub: "अभी उपलब्धता देखें — WhatsApp पर 15 मिनट में कन्फर्मेशन।",
    },
    booking: {
      title: "कमरे की उपलब्धता देखें",
      sub: "यह फॉर्म भरें — सीधे हमारे WhatsApp पर पहुँचेगा। 15 मिनट में कमरा कन्फर्म। भुगतान चेक-इन पर।",
      name: "आपका नाम", namePh: "जैसे: सुरेश अग्रवाल",
      phone: "मोबाइल नंबर", phonePh: "जैसे: 92024 20455",
      checkin: "चेक-इन तारीख",
      nights: "कितनी रातें", nightsOpts: ["1 रात", "2 रातें", "3 रातें", "4+ रातें"],
      room: "कमरे का प्रकार", roomAny: "हमारे लिए सबसे अच्छा कमरा सुझाएँ",
      guests: "अतिथि", guestsOpts: ["1–2 अतिथि", "3–4 अतिथि", "5–6 अतिथि", "समूह (7+)"],
      note: "विशेष अनुरोध (वैकल्पिक)", notePh: "जैसे: पहली सुबह भस्म आरती, ग्राउंड-फ्लोर कमरा",
      submit: "WhatsApp पर पूछें",
      or: "या",
      call: "होटल को कॉल करें",
      success: "WhatsApp खुल रहा है… आपकी उपलब्धता रिक्वेस्ट भेजने के लिए तैयार है!",
    },
    footer: { rights: "सर्वाधिकार सुरक्षित।", quick: "क्विक लिंक्स", contact: "संपर्क", hours: "फ्रंट डेस्क", tagline: "दर्शन आसान — 2011 से।" },
    misc: { viewAll: "सभी कमरे देखें", experience: "अनुभव", readMore: "और जानें", getDirections: "रास्ता देखें", emergency: "24×7 फ्रंट डेस्क व बुकिंग हेल्पलाइन", perNight: "प्रति रात्रि", bookRoom: "यह कमरा बुक करें" },
    about: {
      title: "केसर पैलेस के बारे में",
      sub: "महाकाल से 300 मीटर — पारिवारिक यात्री होटल।",
      story1: "होटल केसर पैलेस की शुरुआत 2011 में उज्जैन के शर्मा परिवार ने एक सीधी सोच के साथ की — जो यात्री महाकाल के दर्शन के लिए हज़ार किलोमीटर चलकर आया है, उसे मंदिर के पास ही साफ बिस्तर, गर्म पानी और ईमानदार दाम मिलने चाहिए।",
      story2: "तब 12 कमरों से आज 45 कमरों तक — शुद्ध शाकाहारी भोजनालय, ट्रैवल डेस्क, बस पार्किंग और भस्म आरती सहायता के साथ — हम देश के हर कोने से आए एक लाख से अधिक यात्रियों की सेवा कर चुके हैं, जिनमें से कई हर सावन लौटते हैं।",
      story3: "हमारा वादा कभी नहीं बदला: होटल महाकाल के समय पर चलता है, हमारे नहीं। सुबह 3 बजे वेक-अप कॉल, 4 बजे नाश्ता, और ऐसा स्टाफ जो हर अतिथि को त्योहार पर आए परिवार जैसा मानता है।",
      missionTitle: "हमारा वादा",
      mission: "हर यात्री परिवार को महाकाल से 300 मीटर पर, ईमानदार दाम में दर्शन-केंद्रित आराम मिले।",
      values: [
        { title: "स्वच्छता सर्वप्रथम", desc: "कमरे रोज़ सैनिटाइज़, हर अतिथि के लिए ताज़ी चादरें, बेदाग बाथरूम।" },
        { title: "ईमानदार दाम", desc: "रिसेप्शन पर किराया कार्ड। त्योहार में भी लूट नहीं, कोई छिपा शुल्क नहीं।" },
        { title: "सेवा भाव", desc: "वरिष्ठ नागरिक सहायता, मंदिर तक फ्री ड्रॉप और हर यात्रा योजना में मदद।" },
        { title: "आरती-तैयार 24×7", desc: "गर्म पानी, चाय और सुबह 3 बजे वेक-अप कॉल — हर एक दिन।" },
      ],
    },
  },
};
