import { LanguageKeys } from "./../constants";
import { IWord, ISettings } from "../model/models";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IDictionary } from "src/model/models";
import { BehaviorSubject, merge } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class Store {
  constructor(private httpClient: HttpClient) {}

  private readonly _words = new BehaviorSubject<IWord[]>([
    // TODO: add id?
    { ru: "Образование", en: "Education" },
    { ru: "План", en: "Plan" },
    { ru: "Работа", en: "Work" }
  ]);
  private readonly _settings = new BehaviorSubject<ISettings>({
    challengeNo: 1,
    numOfWords: 3,
    time: 10,
    currentLanguage: LanguageKeys.ru,
    languages: [LanguageKeys.ru, LanguageKeys.en]
  });

  readonly words$ = this._words.asObservable();
  readonly settings$ = this._settings.asObservable();

  get words() {
    return this._words.getValue();
  }
  set words(val) {
    this._words.next(val);
  }

  get settings() {
    return this._settings.getValue();
  }
  set settings(newSettings) {
    this._settings.next(newSettings);
  }

  url = "https://translate.yandex.net/api/v1.5/tr.json/translate";
  apiKey =
    "trnsl.1.1.20191219T175535Z.a8f7c538ee433210.bf031d9de146dd06ce73efca542cc93eb7a18f36";
  translatedWord = "";
  translateToLang = "ru-en";

  readonly challengeWords$ = merge(this.words$, this.settings$).pipe();

  getChallenge() {
    return this.words.map((word, i) => {
      if (i < this.settings.numOfWords) {
        return word;
      }
    });
  }

  fetchTranslation(text: string) {
    return this.httpClient.get(
      `${this.url}?key=${this.apiKey}&text=${text}&lang=${this.translateToLang}`
    );
  }

  addWord(newWord: IWord) {
    const isDuplicate = this.words.some(
      word => word.ru.toLowerCase() === newWord.ru.toLowerCase()
    );
    if (isDuplicate) {
      return console.log(newWord.ru, " is already in dictionary!");
    }
    this.words = [...this.words, newWord];
    console.log(newWord, "has been added to your dictionary!", this.words);
  }

  removeWord(wordToRemove: IWord) {
    return (this.words = this.words.filter(
      word => word.ru.toLowerCase() === wordToRemove.ru.toLowerCase()
    ));
  }

  updateSettings(newSettings: Partial<ISettings>) {
    this.settings = { ...this.settings, ...newSettings };
  }
}
