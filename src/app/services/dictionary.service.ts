import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { IWord } from "src/model/models";
import { environment } from "src/environments/environment.prod";

@Injectable({
  providedIn: "root"
})
export class DictionaryService {
  constructor(private httpClient: HttpClient) {}

  private readonly _words = new BehaviorSubject<IWord[]>([
    // TODO: add id?
    { ru: "Образование", en: "Education" },
    { ru: "План", en: "Plan" },
    { ru: "Работа", en: "Work" }
  ]);

  readonly words$ = this._words.asObservable();

  get words() {
    return this._words.getValue();
  }
  set words(val) {
    this._words.next(val);
  }

  url = "https://translate.yandex.net/api/v1.5/tr.json/translate";
  apiKey = environment.apiKey;
  translatedWord = "";
  translateToLang = "ru-en";

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
}
