import { LanguageKeys, NOTIFICATIONS, IAllNotifications, ANSWER_KEYS } from "./../constants";

export interface ITranslation {
  text: string[];
}

export interface IDictionary {
  [id: string]: IWord;
}

export interface IWord {
  ru: string;
  en: string;
}

export interface ISettings {
  time: number;
  currentLanguage: ILanguages;
  challengeNo: number;
  numOfWords: number;
  languages: ILanguages[];
}

export type ILanguages = keyof typeof LanguageKeys;

export interface IChallengeState {
  response: {};
  answerStatus: {}; timeCount: 0;
  isChallengeVisible: boolean;
  isResultVisible: boolean;
  challengeResult: string;
  timer: any;
  notification: keyof typeof NOTIFICATIONS;
  finalResult: keyof typeof ANSWER_KEYS | null;
}
