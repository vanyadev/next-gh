export const getCircleColor = (language: string): string => {
  const topLanguages: Record<string, string> = {
    TypeScript: "bg-blue-500",
    JavaScript: "bg-yellow-500",
    HTML: "bg-red-500",
    Python: "bg-green-500",
    Java: "bg-purple-500",
    Ruby: "bg-pink-500",
    CSS: "bg-indigo-500",
    C: "bg-teal-500",
    CPlusPlus: "bg-orange-500",
    PHP: "bg-cyan-500",
  };

  return topLanguages[language] || "bg-gray-300";
};
