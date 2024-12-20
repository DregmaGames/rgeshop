import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
      className="flex items-center space-x-1 text-white hover:text-yellow-400 transition-colors"
    >
      <Languages className="h-5 w-5" />
      <span className="text-sm font-medium">{language.toUpperCase()}</span>
    </button>
  );
}