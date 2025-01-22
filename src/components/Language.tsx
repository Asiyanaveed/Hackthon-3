// src/components/Language.tsx
'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Select from 'react-select';

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (selectedOption: any) => {
    i18n.changeLanguage(selectedOption.value);
  };

  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'ur', label: 'اردو' }
  ];

  return (
    <div className="App">
      <h1>{t('welcome')}</h1>
      <p>{t('about')}</p>

      <div>
        {/* Language dropdown */}
        <Select
          options={languageOptions}
          onChange={handleLanguageChange}
          defaultValue={languageOptions[0]} // Default language
        />
      </div>

      <div>
        <Link href="/language" className="hover:text-gray-600">Language</Link>
      </div>
    </div>
  );
}

export default LanguageSelector;

