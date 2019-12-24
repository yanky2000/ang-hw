import { Component, OnInit } from "@angular/core";
import { TranslateService } from "../translate.service";
import { SettingsService } from "../settings.service";
import { ISettings, IDictionary } from "src/model/models";

@Component({
  selector: "app-word-challenge",
  templateUrl: "./word-challenge.component.html",
  styleUrls: ["./word-challenge.component.css"]
})
export class WordChallengeComponent implements OnInit {
  settings: ISettings;
  words: IDictionary;
  response: any;

  constructor(
    private translateService: TranslateService,
    private settingsService: SettingsService
  ) {
    this.words = this.translateService.getWords();
    this.settings = this.settingsService.getSettings();
    this.response = {};
  }
  // TODO: 1. Get current challenge No from route,
  // 2. display current challenge word according to router No
  // 3. Go to next challenge if translation is correct.

  getChallengeWords() {
    let challengCount = 0;
    const challengeWords: string[] = [];

    for (const word of this.words) {
      if (challengCount > this.settings.numOfWords) {
        return;
      }
      challengeWords.push(word[this.settings.currentLanguage]);
      challengCount++;
    }
    return challengeWords;
  }

  word() {
    return this.getChallengeWords()[0];
  }
  ngOnInit() {
    // console.log(JSON.stringify(this.settings))
  }
  onSubmit(val: any) {
    console.log(2, val, this.response);
  }

  isAnswerCorrect() {}
}
