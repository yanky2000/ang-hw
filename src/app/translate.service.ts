import { IDict } from "./../model/models";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IWord } from "src/model/models";

@Injectable({
  providedIn: "root"
})
export class TranslateService {
  constructor(private httpClient: HttpClient) {}
  initWords: IWord[] = [
    { id: 1, dict: { ru: "Образование", en: "Education" } },
    { id: 2, dict: { ru: "План", en: "Plan" } },
    { id: 3, dict: { ru: "Работа", en: "Work" } }
  ];
  url = "https://translate.yandex.net/api/v1.5/tr.json/translate";
  apiKey =
    "trnsl.1.1.20191219T175535Z.a8f7c538ee433210.bf031d9de146dd06ce73efca542cc93eb7a18f36";
  translatedWord = "";
  translateToLang = "ru-en";

  getAllWords(): IWord[] {
    return this.initWords;
  }
  fetchTranslation(text: string) {
    return this.httpClient.get(
      `${this.url}?key=${this.apiKey}&text=${text}&lang=${this.translateToLang}`
    );
  }

  addWord(newWord: IDict) {
    const newWordToAdd: IWord = { id: Date.now(), dict: { ...newWord } };
    this.initWords.push(newWordToAdd);
    console.log(this.initWords);
  }
}
