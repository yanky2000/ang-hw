import { Component, OnInit } from "@angular/core";
import { TranslateService } from "../translate.service";
import { IDictionary } from "src/model/models";

@Component({
  selector: "app-words-list",
  templateUrl: "./words-list.component.html",
  styleUrls: ["./words-list.component.css"]
})
export class WordsListComponent implements OnInit {
  words: IDictionary;

  constructor(private translateService: TranslateService) {
    this.words = this.translateService.getWords();
  }

  formIsVisible = false;

  ngOnInit() {}

  toggleFormVisibility() {
    this.formIsVisible = !this.formIsVisible;
  }
}
