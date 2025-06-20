import { ArrowDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in-delay-1"> {t('hero.greeting')} </span>
            <span className="opacity-0 text-primary animate-fade-in-delay-2">
              {" "}
              Rayan{" "}
            </span>
            <span className="opacity-0 text-gradient ml-2 animate-fade-in-delay-3">
              {" "}
              Racki{" "}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-5 max-w-2xl mx-auto">
            {t('hero.description.part1')}
            <span className="text-primary">{t('hero.description.highlight')}</span>
            {t('hero.description.part2')}
          </p>

          <div>
            <a
              href="#projects"
              className="opacity-0 cosmic-button animate-fade-in-delay-6"
            >
              {t('hero.cta')}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> {t('hero.scroll')} </span>
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};