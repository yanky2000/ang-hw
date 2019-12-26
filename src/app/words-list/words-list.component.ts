import { Component, OnInit } from "@angular/core";
import { DictionaryService } from "../dictionary.service";

@Component({
  selector: "app-words-list",
  templateUrl: "./words-list.component.html",
  styleUrls: ["./words-list.component.css"]
})
export class WordsListComponent implements OnInit {
  words: any;

  constructor(private dictionary: DictionaryService) {
  }

  formIsVisible = false;

  ngOnInit() {}

  toggleFormVisibility() {
    this.formIsVisible = !this.formIsVisible;
  }
}
