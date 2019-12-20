import { ITranslation } from "./../../model/models";
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { TranslateService } from "../translate.service";
import { of, fromEvent } from "rxjs";
import {
  debounceTime,
  map,
  distinctUntilChanged,
  filter
} from "rxjs/operators";

@Component({
  selector: "app-words-list",
  templateUrl: "./words-list.component.html",
  styleUrls: ["./words-list.component.css"]
})
export class WordsListComponent implements OnInit {
  @ViewChild("searchWord", { static: true }) searchWord: ElementRef;
  constructor(private translateService: TranslateService) {
    this.isSearching = false;
    this.words = this.translateService.getAllWords();
    this.translatedWord = this.translateService.translatedWord;
  }

  isSearching = false;
  words = [];
  formIsVisible = false;
  translatedWord = "";
  newWord = "";
  translated: any = "";

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
    const newWord = { ru: this.newWord, en: this.translatedWord };
    this.translateService.addWord(newWord);
  }

  getTranslation(str?: string) {
    return this.translateService.fetchTranslation(this.newWord);
  }

  toggleFormVisibility() {
    this.formIsVisible = !this.formIsVisible;
  }
}
