import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { LanguageKeys } from "../../constants";
import { ISettings } from 'src/model/models';

@Injectable({
  providedIn: "root"
})
export class SettingsService {
  static getInitialState() {
    return {
      challengeNo: 1,
      numOfWords: 3,
      time: 133,
      currentLanguage: LanguageKeys.ru,
      languages: [LanguageKeys.ru, LanguageKeys.en]
    };
  }
  constructor() {}
  private readonly _settings = new BehaviorSubject<ISettings>({
    ...SettingsService.getInitialState()
  });
  readonly settings$ = this._settings.asObservable();

  get settings() {
    return this._settings.getValue();
  }
  set settings(newSettings) {
    this._settings.next(newSettings);
  }

  updateSettings(newSettings: Partial<ISettings>) {
    this.settings = {...this.settings, ...newSettings} ;
  }
}
