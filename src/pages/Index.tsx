import { Phone, Mail, MapPin, Clock, CheckCircle2, Zap, Wrench, Home, Cpu } from "lucide-react";

import logo from "@/assets/logo.png";

const HeroSection = () => (
  <section className="section-padding bg-background" id="hero">
    <div className="container-narrow text-center">
      <img
        src={logo}
        alt="Elektroinstallation Ing. Olaf Manohr"
        className="mx-auto mb-10 h-16 w-auto md:h-20"
        loading="eager"
      />
      <h1 className="mb-6 text-3xl font-semibold leading-tight md:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
        Elektriker in Grünheide –{" "}
        <span className="text-primary">seit über 35&nbsp;Jahren</span>{" "}
        zuverlässig für Sie im Einsatz
      </h1>
      <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
        Ob Reparatur, Neuinstallation oder Modernisierung – wir sorgen dafür,
        dass Ihre Elektrik sicher und zuverlässig funktioniert.
      </p>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <a
          href="tel:+4933626263"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Phone className="h-5 w-5" />
          Jetzt anrufen
        </a>
        <a
          href="#kontakt"
          className="inline-flex items-center gap-2 rounded-lg border-2 border-primary px-8 py-4 text-lg font-semibold text-primary transition-colors hover:bg-accent"
        >
          <Mail className="h-5 w-5" />
          Anfrage senden
        </a>
      </div>
      <p className="mt-6 text-sm text-muted-foreground">
        Über 35 Jahre Erfahrung im Elektrohandwerk
      </p>
    </div>
  </section>
);

const TrustSection = () => (
  <section className="section-padding bg-card" id="vertrauen">
    <div className="container-narrow">
      <h2 className="mb-8 text-center text-2xl font-semibold md:text-3xl">
        Elektroarbeiten sind Vertrauenssache
      </h2>
      <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-muted-foreground">
        Seit mehr als 35&nbsp;Jahren steht Elektroinstallation Ing.&nbsp;Olaf
        Manohr für saubere Arbeit, klare Absprachen und zuverlässige Umsetzung.
        Unsere Kunden schätzen vor allem, dass wir erreichbar sind, mitdenken
        und Lösungen finden, die im Alltag wirklich funktionieren.
      </p>
    </div>
  </section>
);

const services = [
  {
    icon: Zap,
    title: "Elektroinstallation & Neubau",
    text: "Wir planen und installieren komplette elektrische Anlagen – strukturiert, sicher und auf Ihre Anforderungen abgestimmt.",
  },
  {
    icon: Wrench,
    title: "Reparatur & schnelle Hilfe",
    text: "Wenn etwas nicht funktioniert, zählt vor allem eines: schnelle und zuverlässige Hilfe. Genau dafür stehen wir.",
  },
  {
    icon: Home,
    title: "Modernisierung & Sanierung",
    text: "Veraltete Elektroanlagen bringen wir auf den aktuellen Stand – für mehr Sicherheit, Effizienz und Zukunftssicherheit.",
  },
  {
    icon: Cpu,
    title: "Moderne Technik & Speziallösungen",
    text: "Von Wärmepumpen über Datennetzwerke bis hin zu Smart-Home-Systemen – wir verbinden klassische Elektroarbeit mit moderner Technik.",
  },
];

const ServicesSection = () => (
  <section className="section-padding bg-background" id="leistungen">
    <div className="container-wide">
      <h2 className="mb-4 text-center text-2xl font-semibold md:text-3xl">
        Unsere Leistungen
      </h2>
      <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-muted-foreground">
        Wir decken das gesamte Spektrum moderner Elektroinstallation ab – von
        kleinen Reparaturen bis zu umfangreichen Projekten.
      </p>
      <div className="grid gap-8 sm:grid-cols-2">
        {services.map((s) => (
          <article
            key={s.title}
            className="rounded-xl border border-border bg-card p-8 transition-shadow hover:shadow-md"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
              <s.icon className="h-6 w-6 text-accent-foreground" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">{s.title}</h3>
            <p className="leading-relaxed text-muted-foreground">{s.text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const trustPoints = [
  "Über 35 Jahre Erfahrung im Elektrohandwerk",
  "Persönliche Betreuung statt wechselnder Ansprechpartner",
  "Saubere, zuverlässige und termingerechte Arbeit",
  "Regional verwurzelt in Grünheide und Umgebung",
];

const WhyUsSection = () => (
  <section className="section-padding bg-card" id="warum-wir">
    <div className="container-narrow">
      <h2 className="mb-4 text-center text-2xl font-semibold md:text-3xl">
        Warum Kunden uns wählen
      </h2>
      <p className="mb-10 text-center text-lg text-muted-foreground">
        Warum sich Kunden seit Jahrzehnten für uns entscheiden:
      </p>
      <ul className="mx-auto max-w-lg space-y-5">
        {trustPoints.map((point) => (
          <li key={point} className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-primary" />
            <span className="text-lg">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const ContactSection = () => (
  <section className="section-padding bg-background" id="kontakt">
    <div className="container-narrow">
      <h2 className="mb-4 text-center text-2xl font-semibold md:text-3xl">
        Jetzt Kontakt aufnehmen
      </h2>
      <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-muted-foreground">
        Sie brauchen einen Elektriker, auf den Sie sich verlassen können? Dann
        melden Sie sich bei uns – wir kümmern uns darum.
      </p>

      <div className="mx-auto max-w-md space-y-8 text-center">
        <div className="flex flex-col items-center gap-2">
          <MapPin className="h-6 w-6 text-primary" />
          <p className="font-semibold">Adresse</p>
          <p className="text-muted-foreground">
            Gottesbrück 8, 15537 Grünheide (Mark)
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Phone className="h-6 w-6 text-primary" />
          <p className="font-semibold">Telefon</p>
          <a
            href="tel:+4933626263"
            className="text-primary underline-offset-2 hover:underline"
          >
            +49 3362 6263
          </a>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Mail className="h-6 w-6 text-primary" />
          <p className="font-semibold">E-Mail</p>
          <a
            href="mailto:info@elektromanohr.de"
            className="text-primary underline-offset-2 hover:underline"
          >
            info@elektromanohr.de
          </a>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Clock className="h-6 w-6 text-primary" />
          <p className="font-semibold">Öffnungszeiten</p>
          <p className="text-muted-foreground">Mo–Do: 7:30 – 16:00 Uhr</p>
          <p className="text-muted-foreground">Fr: 7:30 – 13:00 Uhr</p>
        </div>
      </div>
    </div>
  </section>
);

const Index = () => (
  <main>
    <HeroSection />
    <TrustSection />
    <ServicesSection />
    <WhyUsSection />
    <ContactSection />
    <Footer />
  </main>
);

export default Index;
