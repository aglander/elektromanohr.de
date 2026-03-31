import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const Datenschutz = () => (
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

        <h1 className="mb-8 text-3xl font-semibold md:text-4xl">
          Datenschutzerklärung
        </h1>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
          <div className="space-y-10 text-lg leading-relaxed text-foreground">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold md:text-[1.75rem]">
                1. Allgemeine Hinweise
              </h2>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber,
                was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
                Website besuchen.
              </p>
            </section>

            <section className="space-y-4 border-t border-border/70 pt-8">
              <h2 className="text-2xl font-semibold md:text-[1.75rem]">
                2. Verantwortlicher
              </h2>
              <p>
                Elektroinstallation Ing. Olaf Manohr
                <br />
                Inhaber: Olaf Manohr
                <br />
                Gottesbrück 8
                <br />
                15537 Grünheide (Mark)
                <br />
                E-Mail:{" "}
                <a
                  href="mailto:info@elektromanohr.de"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  info@elektromanohr.de
                </a>
              </p>
            </section>

            <section className="space-y-5 border-t border-border/70 pt-8">
              <h2 className="text-2xl font-semibold md:text-[1.75rem]">
                3. Datenerfassung auf dieser Website
              </h2>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Server-Log-Dateien</h3>
                <p>
                  Der Provider der Seiten erhebt und speichert automatisch
                  Informationen in sogenannten Server-Log-Dateien, die Ihr
                  Browser automatisch übermittelt. Dies sind z.&nbsp;B.:
                </p>
                <ul className="list-disc space-y-2 pl-6 marker:text-primary">
                  <li>IP-Adresse</li>
                  <li>Browsertyp und Browserversion</li>
                  <li>Betriebssystem</li>
                  <li>Uhrzeit der Serveranfrage</li>
                </ul>
                <p>
                  Diese Daten werden nicht mit anderen Datenquellen
                  zusammengeführt.
                </p>
                <p>
                  Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
                  Interesse an einem sicheren und stabilen Betrieb der Website).
                </p>
              </div>
            </section>

            <section className="space-y-5 border-t border-border/70 pt-8">
              <h2 className="text-2xl font-semibold md:text-[1.75rem]">
                4. Kontaktaufnahme
              </h2>
              <p>
                Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben zur
                Bearbeitung der Anfrage gespeichert.
              </p>
              <p>
                Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO
                (Vertragsanbahnung) sowie Art. 6 Abs. 1 lit. f DSGVO, soweit es
                um allgemeine Anfragen geht.
              </p>

              <div className="space-y-4 rounded-xl bg-background/70 p-5">
                <h3 className="text-xl font-semibold">
                  Verwendung unseres Online-Formulars
                </h3>
                <p>
                  Unsere Internetseite nutzt Form.taxi, einen Webdienst der
                  Webseite{" "}
                  <a
                    href="https://form.taxi"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    form.taxi
                  </a>{" "}
                  (nachfolgend &quot;Form.taxi&quot;). Um Ihnen die
                  Funktionalität des Formulars zur Verfügung zu stellen, senden
                  wir die von Ihnen angegebenen Daten an Form.taxi.
                </p>
                <p>
                  Diese Daten werden dort verarbeitet, gespeichert und an uns
                  per E-Mail weitergegeben. Außerdem erhebt Form.taxi unter
                  anderem weitere Daten wie Ihre IP-Adresse, Ihren Browsertyp,
                  die Domain unserer Webseite sowie Datum und Uhrzeit des
                  Zugriffs, um die gewünschte Funktionalität des Formulars
                  bereitzustellen.
                </p>
                <p>
                  Rechtsgrundlage für die Nutzung von Form.taxi ist Art. 6 Abs.
                  1 S. 1 lit. f DSGVO (berechtigtes Interesse an einer
                  zuverlässigen und nutzerfreundlichen Bereitstellung unseres
                  Kontaktformulars). Die Datenverarbeitung und Speicherung
                  erfolgt innerhalb der Europäischen Union.
                </p>
                <p>
                  Weitere Informationen entnehmen Sie der Datenschutzerklärung
                  von Form.taxi:{" "}
                  <a
                    href="https://form.taxi/de/privacy"
                    target="_blank"
                    rel="noreferrer"
                    className="break-words text-primary underline-offset-4 hover:underline"
                  >
                    https://form.taxi/de/privacy
                  </a>
                </p>
              </div>
            </section>

            <section className="space-y-4 border-t border-border/70 pt-8">
              <h2 className="text-2xl font-semibold md:text-[1.75rem]">
                5. Externe Schriftarten
              </h2>
              <p>
                Diese Website verwendet lokal eingebundene Schriftarten. Es
                findet keine Datenübertragung an externe Server
                (z.&nbsp;B. Google) statt.
              </p>
            </section>

            <section className="space-y-4 border-t border-border/70 pt-8">
              <h2 className="text-2xl font-semibold md:text-[1.75rem]">
                6. Ihre Rechte
              </h2>
              <p>Sie haben jederzeit das Recht auf:</p>
              <ul className="list-disc space-y-2 pl-6 marker:text-primary">
                <li>Auskunft über Ihre gespeicherten personenbezogenen Daten</li>
                <li>Berichtigung unrichtiger Daten</li>
                <li>Löschung Ihrer Daten</li>
                <li>Einschränkung der Verarbeitung</li>
                <li>Widerspruch gegen die Verarbeitung</li>
                <li>Datenübertragbarkeit</li>
              </ul>
              <p>
                Außerdem steht Ihnen ein Beschwerderecht bei einer zuständigen
                Datenschutzaufsichtsbehörde zu.
              </p>
            </section>

            <section className="space-y-4 border-t border-border/70 pt-8">
              <h2 className="text-2xl font-semibold md:text-[1.75rem]">
                7. Speicherdauer
              </h2>
              <p>
                Personenbezogene Daten werden nur so lange gespeichert, wie dies
                für die jeweiligen Zwecke erforderlich ist oder gesetzliche
                Aufbewahrungsfristen bestehen.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default Datenschutz;
