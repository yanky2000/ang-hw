import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TranslateService {
  constructor(private httpClient: HttpClient) {}
  initWords = [
    { id: 1, dict: { ru: "Образование", en: "Education" } },
    { id: 2, dict: { ru: "План", en: "Plan" } },
    { id: 3, dict: { ru: "Работа", en: "Work" } }
  ];
  url = "https://translate.yandex.net/api/v1.5/tr.json/translate";
  apiKey =
    "trnsl.1.1.20191219T175535Z.a8f7c538ee433210.bf031d9de146dd06ce73efca542cc93eb7a18f36";

  translateToLang = "ru-en";

  getAllWords() {
    return this.initWords;
  }
  fetchTranslation(text: string) {
    return this.httpClient.get(
      `${this.url}?key=${this.apiKey}&text=${text}&lang=${this.translateToLang}`
    ).subscribe(res => console.log(res));
  }
}
