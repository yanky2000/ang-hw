import { Component, OnInit } from "@angular/core";
import { TranslateService } from "../translate.service";

@Component({
  selector: "app-word-challenge",
  templateUrl: "./word-challenge.component.html",
  styleUrls: ["./word-challenge.component.css"]
})
export class WordChallengeComponent implements OnInit {
  constructor(private translateService: TranslateService) {
    this.words = this.translateService.getAllWords();
  }

  words = [];
  

  ngOnInit() {}
}
