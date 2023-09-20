"use client";

import React, { Suspense, useEffect, useState } from "react";
import { fetchLanguages } from "../helpers/fetchLanguages";
import LanguageTag from "./LanguageTag";

interface ILanguages {
  languages_url: string;
}

const Languages: React.FC<ILanguages> = ({ languages_url }) => {
  const [languages, setLanguages] = useState<string[]>([]);

  useEffect(() => {
    if (!languages_url) return;
    fetchLanguages(languages_url)
      .then((data) => {
        const languageNames = Object.keys(data);
        setLanguages(languageNames);
      })
      .catch((error) => {
        console.error("Error fetching languages:", error);
      });
  }, [languages_url]);
  return (
    <div className="flex gap-2 flex-wrap">
      <Suspense fallback={<p>Loading...</p>}>
        {languages
          ? languages.map((lang) => <LanguageTag key={lang} language={lang} />)
          : null}
      </Suspense>
    </div>
  );
};

export default Languages;
