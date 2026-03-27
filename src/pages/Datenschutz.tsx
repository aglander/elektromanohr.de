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

        <div className="prose prose-lg max-w-none text-foreground">
          <h2>1. Allgemeine Hinweise</h2>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
            besuchen.
          </p>

          <h2>2. Verantwortlicher</h2>
          <p>
            Elektroinstallation Ing. Olaf Manohr
            <br />
            Inhaber: Olaf Manohr
            <br />
            Gottesbrück 8<br />
            15537 Grünheide (Mark)
            <br />
            E-Mail:{" "}
            <a
              href="mailto:info@elektromanohr.de"
              className="text-primary hover:underline"
            >
              info@elektromanohr.de
            </a>
          </p>

          <h2>3. Datenerfassung auf dieser Website</h2>
          <h3>Server-Log-Dateien</h3>
          <p>
            Der Provider der Seiten erhebt und speichert automatisch
            Informationen in sogenannten Server-Log-Dateien, die Ihr Browser
            automatisch übermittelt. Dies sind z.&nbsp;B.:
          </p>
          <ul>
            <li>IP-Adresse</li>
            <li>Browsertyp und Browserversion</li>
            <li>Betriebssystem</li>
            <li>Uhrzeit der Serveranfrage</li>
          </ul>
          <p>
            Diese Daten werden nicht mit anderen Datenquellen zusammengeführt.
          </p>
          <p>
            Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
            an einem sicheren und stabilen Betrieb der Website).
          </p>

          <h2>4. Kontaktaufnahme</h2>
          <p>
            Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben zur
            Bearbeitung der Anfrage gespeichert.
          </p>
          <p>
            Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung)
            sowie Art. 6 Abs. 1 lit. f DSGVO, soweit es um allgemeine Anfragen
            geht.
          </p>

          <h2>5. Externe Schriftarten</h2>
          <p>
            Diese Website verwendet lokal eingebundene Schriftarten. Es findet
            keine Datenübertragung an externe Server (z.&nbsp;B. Google) statt.
          </p>

          <h2>6. Ihre Rechte</h2>
          <p>Sie haben jederzeit das Recht auf:</p>
          <ul>
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

          <h2>7. Speicherdauer</h2>
          <p>
            Personenbezogene Daten werden nur so lange gespeichert, wie dies für
            die jeweiligen Zwecke erforderlich ist oder gesetzliche
            Aufbewahrungsfristen bestehen.
          </p>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default Datenschutz;
