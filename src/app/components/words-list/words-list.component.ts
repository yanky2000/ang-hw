import { Component, OnInit, OnDestroy } from "@angular/core";
import { IWord } from "src/model/models";
import { Subscription } from "rxjs";
import { DictionaryService } from 'src/app/services/dictionary.service';

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
