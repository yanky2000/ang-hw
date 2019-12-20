import { Languages } from "./../constants";
import { Injectable } from "@angular/core";
import { SettingProperties } from "src/constants";
import { ISettings } from 'src/model/models';

@Injectable({
  providedIn: "root"
})
export class SettingsServiceService {
  constructor(private settingService: SettingsServiceService) {
    this.settings = this.settingService.getSettings();
  }
  settings = {};
  challengeTime = 0;
  challengeLanguage = "ru";

  time = 0;
  language = Languages.ru;
  challengesNo = 0;

  getChallengeTime() {
    return this.challengeTime;
  }
  getChallengesNo() {
    return this.challengesNo;
  }
  getChallengeLange() {
    return this.challengeLanguage;
  }
  getSettings(): ISettings {
    return {
      [SettingProperties.TIME]: this.time,
      [SettingProperties.LANGUAGE]: this.language,
      [SettingProperties.CHALLENGES_NO]: this.challengesNo
    };
  }
}
