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

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
          <div className="space-y-10 text-lg leading-relaxed text-foreground">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold md:text-[1.75rem]">
                Angaben gemäß § 5 DDG
              </h2>
              <p>
                Elektroinstallation Ing. Olaf Manohr
                <br />
                Inhaber: Olaf Manohr
                <br />
                Gottesbrück 8
                <br />
                15537 Grünheide (Mark)
              </p>
              <p>
                Telefon:{" "}
                <a
                  href="tel:+4933626263"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  +49 3362 6263
                </a>
                <br />
                E-Mail:{" "}
                <a
                  href="mailto:info@elektromanohr.de"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  info@elektromanohr.de
                </a>
              </p>
              <p>Handwerksbetrieb eingetragen in die Handwerksrolle.</p>
            </section>

            <section className="space-y-4 border-t border-border/70 pt-8">
              <h2 className="text-2xl font-semibold md:text-[1.75rem]">
                Zuständige Kammer
              </h2>
              <p>
                Handwerkskammer Frankfurt (Oder) – Region Ostbrandenburg
                <br />
                Spiekerstraße 11
                <br />
                15230 Frankfurt (Oder)
              </p>
            </section>

            <section className="space-y-4 border-t border-border/70 pt-8">
              <h2 className="text-2xl font-semibold md:text-[1.75rem]">
                Berufsbezeichnung
              </h2>
              <p>
                Elektrotechniker-Handwerk
                <br />
                Verliehen in: Deutschland
              </p>
            </section>

            <section className="space-y-4 border-t border-border/70 pt-8">
              <h2 className="text-2xl font-semibold md:text-[1.75rem]">
                Berufsrechtliche Regelungen
              </h2>
              <p>
                Handwerksordnung (HwO)
                <br />
                Einsehbar unter:{" "}
                <a
                  href="https://www.gesetze-im-internet.de/hwo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-words text-primary underline-offset-4 hover:underline"
                >
                  https://www.gesetze-im-internet.de/hwo/
                </a>
              </p>
            </section>

            <section className="space-y-4 border-t border-border/70 pt-8">
              <h2 className="text-2xl font-semibold md:text-[1.75rem]">
                Umsatzsteuer-ID
              </h2>
              <p>DE362411855</p>
            </section>

            <section className="space-y-4 border-t border-border/70 pt-8">
              <h2 className="text-2xl font-semibold md:text-[1.75rem]">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <p>
                Olaf Manohr
                <br />
                Anschrift wie oben
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default Impressum;
