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
