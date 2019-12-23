import { LanguageKeys, langMap } from "./../constants";
import { Injectable } from "@angular/core";
import { SettingProperties } from "src/constants";
import { ISettings } from "src/model/models";

@Injectable({
  providedIn: "root"
})
export class SettingsService {
  settings: ISettings;
  constructor() {
    this.settings = {
      challengeNo: 1,
      numOfWords: 3,
      time: 10,
      currentLanguage: LanguageKeys.ru,
      languages: [LanguageKeys.ru, LanguageKeys.en]
    };
  }

  getChallengeTime() {
    return this.settings.time;
  }
  getChallengesNo() {
    return this.settings.challengeNo;
  }
  getChallengeLange() {
    return this.settings.currentLanguage;
  }

  getSettings(): ISettings {
    return this.settings;
  }

  setSettings(newSettings: Partial<ISettings>) {
    this.settings = { ...this.settings, ...newSettings };
  }
}
