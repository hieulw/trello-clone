export function capitalize(str: string): string {
  if (!str) {
    return "";
  }

  const listWords = str.split(" ");
  if (listWords.length === 1) {
    return listWords[0].charAt(0).toUpperCase() + listWords[0].slice(1);
  }

  return listWords.map((word) => capitalize(word)).reduce((prev, curr) => `${prev} ${curr}`);
}

export function localeDate(date_str: string, locale = "en-US") {
  const date = new Date(date_str);
  return date.toLocaleDateString(locale, { month: "short", day: "numeric", year: "numeric" });
}
