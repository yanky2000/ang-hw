import { LanguageKeys } from "./../constants";

export interface ITranslation {
  text: string[];
}
export interface IWord {
  id: number;
  dict: IDict;
}

export interface IDict {
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
