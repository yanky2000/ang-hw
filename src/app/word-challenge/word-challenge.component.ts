import { Component, OnInit } from "@angular/core";
import { Store } from "../store.service";
import { SettingsService } from "../settings.service";
import { ISettings, IWord } from "src/model/models";

@Component({
  selector: "app-word-challenge",
  templateUrl: "./word-challenge.component.html",
  styleUrls: ["./word-challenge.component.css"]
})
export class WordChallengeComponent implements OnInit {
  settings: ISettings;
  response: {};
  status: {};
  words: IWord[];

  constructor(private store: Store) {
    this.response = {};
    this.status = {};
  }

  getChallengeWords() {
    return this.store.words.reduce((acc, word, i) => {
      if (i < this.settings.numOfWords) {
        acc = [...acc, word];
      }
      return acc;
    }, []);
  }

  ngOnInit() {
    this.store.settings$.subscribe(settings => {
      this.settings = settings;
    });
    this.store.words$.subscribe(words => (this.words = words));
  }

  onSubmit() {}

  onClick(word: IWord) {
    const translation = this.response[word.ru];
    if (word.en.toLowerCase() === translation.toLowerCase()) {
      this.status[word.ru] = "correct";
    } else {
      this.status[word.ru] = "wrong";
    }
    console.log(this.status);
  }

}
