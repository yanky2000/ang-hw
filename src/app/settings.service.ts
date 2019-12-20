import { LanguageKeys } from "./../constants";
import { Injectable } from "@angular/core";
import { SettingProperties } from "src/constants";
import { ISettings } from "src/model/models";

@Injectable({
  providedIn: "root"
})
export class SettingsService {
  settings: ISettings;
  constructor() {
    this.settings = { challengeNo: 0, time: 0, language: LanguageKeys.ru };
  }

  getChallengeTime() {
    return this.settings.time;
  }
  getChallengesNo() {
    return this.settings.challengeNo;
  }
  getChallengeLange() {
    return this.settings.language;
  }
  getSettings(): ISettings {
    return this.settings;
  }

  setSettings(newSettings: Partial<ISettings>) {
    this.settings = { ...this.settings, ...newSettings };
  }
}
