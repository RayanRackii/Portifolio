import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '../lib/utils';

const languages = [
  {
    code: 'pt',
    name: 'Português',
    flag: 'br' // código do país
  },
  {
    code: 'en',
    name: 'English',
    flag: 'us' // código do país
  }
];

export const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  const getFlagUrl = (countryCode) => {
    return `https://flagcdn.com/w40/${countryCode}.png`;
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-background/50 hover:bg-background/80 transition-colors duration-300 border border-border"
        aria-label="Select language"
      >
        <img 
          src={getFlagUrl(currentLanguage.flag)} 
          alt={`${currentLanguage.name} flag`}
          className="w-5 h-4 object-cover rounded-sm"
          loading="lazy"
        />
        <span className="hidden sm:block text-sm font-medium text-foreground">
          {currentLanguage.code.toUpperCase()}
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 py-2 bg-background border border-border rounded-lg shadow-lg z-50 min-w-[140px]">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={cn(
                "w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-muted transition-colors",
                i18n.language === language.code && "bg-muted"
              )}
            >
              <img 
                src={getFlagUrl(language.flag)} 
                alt={`${language.name} flag`}
                className="w-6 h-4 object-cover rounded-sm"
                loading="lazy"
              />
              <span className="text-sm text-foreground">{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};