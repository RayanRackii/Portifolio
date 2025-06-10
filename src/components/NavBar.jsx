import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import { LanguageToggle } from "./LanguageToggle";

const navItems = [
  { name: "nav.home", href: "#hero" },
  { name: "nav.about", href: "#about" },
  { name: "nav.skills", href: "#skills" },
  { name: "nav.projects", href: "#projects" },
  { name: "nav.contact", href: "#contact" },
];

export const NavBar = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Rayan </span> Portfolio
          </span>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, key) => (
            <a
              href={item.href}
              key={key}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              {t(item.name)}
            </a>
          ))}
          <LanguageToggle />
        </div>

        <div className="flex items-center space-x-4 md:hidden">
          <LanguageToggle />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="p-2 text-foreground z-50" 
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE NAV */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                href={item.href}
                key={key}
                className="text-foreground hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(item.name)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};