import { Briefcase, Code, User } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from 'i18next';

export const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          {t("about.title")}{" "}
          <span className="text-primary"> {t("about.titleHighlight")} </span>
          <br />
          <br />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold"> {t("about.subtitle")} </h3>

            <p className="text-muted-foreground">{t("about.paragraph1")}</p>

            <p className="text-muted-foreground">{t("about.paragraph2")}</p>

            <p className="text-muted-foreground">{t("about.paragraph3")}</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a className="cosmic-button" href="#contact">
                {t("about.getInTouch")}
              </a>

              <a
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-white transition-colors duration-300"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const lang = i18n.language || "en";
                  const file = lang.startsWith("en")
                    ? "../../resumes/Resume - Rayan K. R. Abu Ali.pdf"
                    : "../../resumes/Curriculo - Rayan K. R. Abu Ali.pdf";
                  window.open(file, "_blank");
                }}
              >
                {t("about.downloadCV")}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="text-primary h-6 w-6" />
                </div>

                <div className="text-left">
                  <h4 className="text-lg font-semibold text-lg">
                    {t("about.skills.dataAnalysis.title")}
                  </h4>
                  <p className="text-muted-foreground">
                    {t("about.skills.dataAnalysis.description")}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="text-primary h-6 w-6" />
                </div>

                <div className="text-left">
                  <h4 className="text-lg font-semibold text-lg">
                    {t("about.skills.automation.title")}
                  </h4>
                  <p className="text-muted-foreground">
                    {t("about.skills.automation.description")}
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="text-primary h-6 w-6" />
                </div>

                <div className="text-left">
                  <h4 className="text-lg font-semibold text-lg">
                    {t("about.skills.consulting.title")}
                  </h4>
                  <p className="text-muted-foreground">
                    {t("about.skills.consulting.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
