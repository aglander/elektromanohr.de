import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const Impressum = () => (
  <>
    <main className="section-padding bg-background">
      <div className="container-narrow">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Zurück zur Startseite
        </Link>

        <h1 className="mb-8 text-3xl font-semibold md:text-4xl">Impressum</h1>

        <div className="prose prose-lg max-w-none text-foreground">
          <h2>Angaben gemäß § 5 DDG</h2>
          <p>
            Elektroinstallation Ing. Olaf Manohr
            <br />
            Inhaber: Olaf Manohr
            <br />
            Gottesbrück 8<br />
            15537 Grünheide (Mark)
          </p>
          <p>
            Telefon:{" "}
            <a href="tel:+4933626263" className="text-primary hover:underline">
              +49 3362 6263
            </a>
            <br />
            E-Mail:{" "}
            <a
              href="mailto:info@elektromanohr.de"
              className="text-primary hover:underline"
            >
              info@elektromanohr.de
            </a>
          </p>

          <p>Handwerksbetrieb eingetragen in die Handwerksrolle.</p>

          <h2>Zuständige Kammer</h2>
          <p>
            Handwerkskammer Frankfurt (Oder) – Region Ostbrandenburg
            <br />
            Spiekerstraße 11
            <br />
            15230 Frankfurt (Oder)
          </p>

          <h2>Berufsbezeichnung</h2>
          <p>
            Elektrotechniker-Handwerk
            <br />
            Verliehen in: Deutschland
          </p>

          <h2>Berufsrechtliche Regelungen</h2>
          <p>
            Handwerksordnung (HwO)
            <br />
            Einsehbar unter:{" "}
            <a
              href="https://www.gesetze-im-internet.de/hwo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              https://www.gesetze-im-internet.de/hwo/
            </a>
          </p>

          <h2>Umsatzsteuer-ID</h2>
          <p>DE362411855</p>

          <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p>
            Olaf Manohr
            <br />
            Anschrift wie oben
          </p>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default Impressum;
