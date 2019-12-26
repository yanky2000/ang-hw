import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { fromEvent, Subscription } from "rxjs";
import {
  debounceTime,
  map,
  distinctUntilChanged,
  filter
} from "rxjs/operators";
import { DictionaryService } from 'src/app/services/dictionary.service';
import { IWord, ITranslation } from "src/model/models";

@Component({
  selector: "app-add-word",
  templateUrl: "./add-word.component.html",
  styleUrls: ["./add-word.component.css"]
})
export class AddWordComponent implements OnInit  {
  @ViewChild("searchWord", { static: true }) searchWord: ElementRef;
  words: IWord[];

  constructor(private dictionary: DictionaryService) {
    this.isSearching = false;
    this.translatedWord = this.dictionary.translatedWord;
  }

  isSearching = false;
  formIsVisible = false;
  translatedWord = "";
  newWord = "";
  translated = "";
  feedback = () =>
    `Добавить слово ${this.newWord} (${this.translatedWord}) в словарь?`;
  sub: Subscription;

  ngOnInit() {
    fromEvent(this.searchWord.nativeElement, "keyup")
      .pipe(
        // get value
        map((event: any) => {
          return event.target.value;
        }),
        // if character length greater then 2
        filter(res => res.length > 2),
        // Time in milliseconds between key events
        debounceTime(1000),
        // If previous query is diffent from current
        distinctUntilChanged()
        // subscription for response
      )
      .subscribe((text: string) => {
        this.isSearching = true;
        this.translatedWord = "";
        this.getTranslation(text).subscribe(
          (res: ITranslation) => {
            console.log("res", res);
            this.isSearching = false;
            this.translatedWord = res.text[0];
          },
          err => {
            this.isSearching = false;
            console.log("error", err);
          }
        );
      });
  }

  onSubmit() {
    const newWord: IWord = { ru: this.newWord, en: this.translatedWord };
    this.dictionary.addWord(newWord);
    this.resetSearch();
  }

  getTranslation(str?: string) {
    return this.dictionary.fetchTranslation(this.newWord);
  }

  resetSearch() {
    this.newWord = "";
    this.translatedWord = "";
  }
}
