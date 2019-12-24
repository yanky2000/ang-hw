import { IWord } from "./../model/models";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IDictionary } from "src/model/models";

@Injectable({
  providedIn: "root"
})
export class TranslateService {
  constructor(private httpClient: HttpClient) {}

  words: IDictionary = {
    1: { ru: "Образование", en: "Education" },
    2: { ru: "План", en: "Plan" },
    3: { ru: "Работа", en: "Work" }
  };

  url = "https://translate.yandex.net/api/v1.5/tr.json/translate";
  apiKey =
    "trnsl.1.1.20191219T175535Z.a8f7c538ee433210.bf031d9de146dd06ce73efca542cc93eb7a18f36";
  translatedWord = "";
  translateToLang = "ru-en";

  getWords(): IDictionary {
    return this.words;
  }

  fetchTranslation(text: string) {
    return this.httpClient.get(
      `${this.url}?key=${this.apiKey}&text=${text}&lang=${this.translateToLang}`
    );
  }

  addWord(newWord: IWord) {
    const newWordToAdd: IDictionary = { [Date.now()]: newWord };
    this.words = { ...this.words, ...newWordToAdd };
  }
}
