export enum SettingProperties {
  TIME = "time",
  CHALLENGES_NO = "challengeNo",
  LANGUAGE = "language"
}

export enum LanguageKeys {
  ru,
  en
}
export const langMap = {
  [LanguageKeys.ru]: { name: "Russian", key: "ru" },
  [LanguageKeys.en]: { name: "English", key: "en" }
};
