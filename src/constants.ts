export enum SettingProperties {
  TIME = "time",
  CHALLENGES_NO = "challengeNo",
  LANGUAGE = "language"
}

export enum LanguageKeys {
  ru = "ru",
  en = "en"
}
export const langMap = {
  [LanguageKeys.ru]: { name: "Russian", key: "ru" },
  [LanguageKeys.en]: { name: "English", key: "en" }
};

export enum ANSWER_KEYS {
  CORRECT = "CORRECT",
  WRONG = "WRONG"
}
export enum NOTIFICATIONS {
  FAILED = "FAILED",
  SUCCESS = "SUCCESS",
  STOPPED = "STOPPED",
  EMPTY = "EMPTY"
}

export type IAllNotifications = keyof typeof NOTIFICATIONS;

export const TEST_FAILED = "TEST FAILED!";
export const TEST_COMPLETE = "TEST COMPLETE!";
