import { Link } from "react-router-dom";
import { ArrowLeft, BadgeCheck } from "lucide-react";
import Footer from "@/components/Footer";

const Danke = () => (
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

        <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm md:p-12">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent">
            <BadgeCheck className="h-10 w-10 text-primary" />
          </div>

          <h1 className="mb-4 text-3xl font-semibold md:text-4xl">
            Vielen Dank für Ihre Nachricht
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Ihre Anfrage ist bei uns eingegangen. Wir melden uns so schnell wie
            möglich bei Ihnen zurück und kümmern uns gern um Ihr Anliegen.
          </p>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default Danke;
