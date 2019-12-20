import { Component, OnInit } from "@angular/core";
import { TranslateService } from "../translate.service";

@Component({
  selector: "app-words-list",
  templateUrl: "./words-list.component.html",
  styleUrls: ["./words-list.component.css"]
})
export class WordsListComponent implements OnInit {
  constructor(private translateService: TranslateService) {
    this.words = this.translateService.getAllWords();
  }

  words = [];
  formIsVisible = false;

  ngOnInit() {}

  toggleFormVisibility() {
    this.formIsVisible = !this.formIsVisible;
  }
}
