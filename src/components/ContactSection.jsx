import { Github, Linkedin, Mail, MapPin, Phone, Pin } from "lucide-react";
import { useTranslation } from "react-i18next";

export const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t("contact.title")} <span className="text-primary">{t("contact.titleHighlight")}</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("contact.text")}
        </p>

        <h3 className="text-2xl font-semibold"> {t("contact.subTitle")} </h3>
        <br />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 justify-center">

            {/* LinkedIn */}
            <div className="flex flex-col items-center space-y-2">
            <div className="p-3 rounded-full bg-primary/10">
              <Linkedin className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-medium">LinkedIn</h4>
            <a
              href="https://www.linkedin.com/in/Rayan-Racki/"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
             Rayan-Racki
            </a>
          </div>

          {/* GitHub */}
            <div className="flex flex-col items-center space-y-2">
            <div className="p-3 rounded-full bg-primary/10">
              <Github className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-medium">LinkedIn</h4>
            <a
              href="https://github.com/RayanRackii"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
             RayanRackii
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center space-y-2">
            <div className="p-3 rounded-full bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-medium">Email</h4>
            <a
              href="mailto:rayanracki@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Rayanracki@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center space-y-2">
            <div className="p-3 rounded-full bg-primary/10">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-medium">{t("contact.phone")}</h4>
            <a
              href="tel:+5545991253771"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              +55 (45) 99125-3771
            </a>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center space-y-2">
            <div className="p-3 rounded-full bg-primary/10">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-medium">{t("contact.location")}</h4>
            <span className="text-muted-foreground">Brazil</span>
          </div>
        </div>
      </div>
    </section>
  );
};
