import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  constructor() { }
  initWords = [
    { id: 1, dict: { ru: "Образование", en: "Education" } },
    { id: 2, dict: { ru: "План", en: "Plan" } },
    { id: 3, dict: { ru: "Работа", en: "Work" } }
  ];
  getAllWords() {
    return this.initWords;
  }
}
