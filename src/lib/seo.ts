export const SITE_URL = "https://www.elektromanohr.de";
export const SITE_NAME = "Elektroinstallation Ing. Olaf Manohr";

export type SeoConfig = {
  title: string;
  description: string;
  path: string;
  robots?: string;
  ogType?: "website" | "article";
};

export const seoConfigs = {
  home: {
    title:
      "Elektriker in Grünheide | Elektroinstallation, Reparatur & Modernisierung",
    description:
      "Elektroinstallation Ing. Olaf Manohr ist Ihr Elektriker in Grünheide (Mark) für Elektroinstallationen, Reparaturen, Modernisierung und zuverlässigen Service in der Region.",
    path: "/",
    ogType: "website",
  },
  impressum: {
    title: "Impressum | Elektroinstallation Ing. Olaf Manohr",
    description:
      "Impressum von Elektroinstallation Ing. Olaf Manohr in Grünheide (Mark) mit allen rechtlich erforderlichen Anbieterangaben und Kontaktinformationen.",
    path: "/impressum",
    ogType: "website",
  },
  datenschutz: {
    title: "Datenschutz | Elektroinstallation Ing. Olaf Manohr",
    description:
      "Datenschutzhinweise von Elektroinstallation Ing. Olaf Manohr zur Verarbeitung personenbezogener Daten auf elektromanohr.de.",
    path: "/datenschutz",
    ogType: "website",
  },
  danke: {
    title: "Vielen Dank | Elektroinstallation Ing. Olaf Manohr",
    description:
      "Vielen Dank für Ihre Nachricht an Elektroinstallation Ing. Olaf Manohr.",
    path: "/danke",
    robots: "noindex, nofollow",
    ogType: "website",
  },
  notFound: {
    title: "Seite nicht gefunden | Elektroinstallation Ing. Olaf Manohr",
    description:
      "Die angeforderte Seite wurde nicht gefunden. Zurück zur Startseite von Elektroinstallation Ing. Olaf Manohr in Grünheide (Mark).",
    path: "/404",
    robots: "noindex, nofollow",
    ogType: "website",
  },
} satisfies Record<string, SeoConfig>;

export const toAbsoluteUrl = (path: string) =>
  path === "/" ? SITE_URL : `${SITE_URL}${path}`;

export const defaultStructuredData = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  email: "info@elektromanohr.de",
  telephone: "+4933626263",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Gottesbrück 8",
    addressLocality: "Grünheide (Mark)",
    postalCode: "15537",
    addressRegion: "Brandenburg",
    addressCountry: "DE",
  },
  openingHours: ["Mo-Th 07:30-16:00", "Fr 07:30-13:00"],
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Grünheide (Mark) und Umgebung",
  },
  description:
    "Elektriker in Grünheide (Mark) für Elektroinstallation, Reparatur und Modernisierung.",
};
