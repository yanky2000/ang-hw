import { Component, OnInit } from "@angular/core";
import { TranslateService } from "../translate.service";
import { SettingsService } from "../settings.service";
import { ISettings } from "src/model/models";

@Component({
  selector: "app-word-challenge",
  templateUrl: "./word-challenge.component.html",
  styleUrls: ["./word-challenge.component.css"]
})
export class WordChallengeComponent implements OnInit {
  settings: ISettings;
  words: any[];

  constructor(
    private translateService: TranslateService,
    private settingsService: SettingsService
  ) {
    this.words = this.translateService.getAllWords();
    this.settings = this.settingsService.getSettings();
  }

  getChallenges() {
    let challengCount = 0;
    const challengeWords = [];

    for (const word of this.words) {
      if (challengCount > this.settings.challengeNo) {
        return;
      }
      challengeWords.push(word);
      challengCount++;
    }
  }

  ngOnInit() {
    // console.log(JSON.stringify(this.settings))
  }
}
