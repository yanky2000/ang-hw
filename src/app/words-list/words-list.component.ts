import { Component, OnInit, OnDestroy } from "@angular/core";
import { DictionaryService } from "../dictionary.service";
import { IWord } from "src/model/models";
import { Subscription } from "rxjs";

@Component({
  selector: "app-words-list",
  templateUrl: "./words-list.component.html",
  styleUrls: ["./words-list.component.css"]
})
export class WordsListComponent implements OnInit, OnDestroy {
  words: IWord[];
  sub: Subscription;

  constructor(private dictionaryService: DictionaryService) {}

  formIsVisible = false;

  ngOnInit() {
    this.sub = this.dictionaryService.words$.subscribe(
      wordsData => (this.words = wordsData)
    );
  }

  ngOnDestroy() {
    if (this.sub != null) {
      this.sub.unsubscribe();
    }
  }

  toggleFormVisibility() {
    this.formIsVisible = !this.formIsVisible;
  }
}
