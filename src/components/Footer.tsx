import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card px-5 py-8 text-center text-sm text-muted-foreground">
    <p>
      © {new Date().getFullYear()} Elektroinstallation Ing. Olaf Manohr –
      Grünheide (Mark)
    </p>
    <nav className="mt-3 flex items-center justify-center gap-4">
      <Link to="/impressum" className="hover:text-primary hover:underline">
        Impressum
      </Link>
      <span aria-hidden="true">·</span>
      <Link to="/datenschutz" className="hover:text-primary hover:underline">
        Datenschutz
      </Link>
    </nav>
  </footer>
);

export default Footer;
