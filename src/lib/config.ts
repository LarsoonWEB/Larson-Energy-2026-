export const siteConfig = {
  name: "Larsoon Energy",
  legalName: "Larsoon Energy d.o.o.",
  description: "Solarne elektrane za kućanstva i industriju u Hrvatskoj",
  url: "https://www.larsoon.com",
  
  contact: {
    email: "info@larsoon.com",
    phone: "+385 99 249 5949",
    phoneDisplay: "+385 99 249 5949",
  },

  address: {
    street: "Trg Ljube Babića 28",
    city: "Jastrebarsko",
    zip: "10450",
    country: "Hrvatska",
    full: "Trg Ljube Babića 28, 10450 Jastrebarsko, Hrvatska",
  },

  legal: {
    court: "Trgovački sud u Zagrebu",
    mbs: "081518425",
    oib: "59474815786",
    bank: "Raiffeisenbank Austria d.d.",
    iban: "HR4824840081135361787",
    swift: "RZBHHR2XXXX",
  },

  navigation: [
    { name: "Usluge", href: "/usluge" },
    { name: "Rješenja", href: "/rjesenja" },
    { name: "Naši radovi", href: "/nasi-radovi" },
    { name: "Solarna Wiki", href: "/solarna-wiki" },
    { name: "Kontakt", href: "/kontakt" },
  ],

  cta: {
    label: "Zatražite ponudu",
    href: "/ponuda",
  },

  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },
} as const;
