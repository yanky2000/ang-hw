import { Languages } from "./../constants";
export interface ITranslation {
  text: string[];
}
export interface INewWord {
  id: number;
  dict: IDict;
}

export interface IDict {
  ru: string;
  en: string;
}

export interface ISettings {
  time: number;
  language: ILanguages;
  challengeNo: number;
}

export type ILanguages = keyof typeof Languages;
