import { Component, OnInit } from "@angular/core";
import { TranslateService } from "../translate.service";
import { ITranslation } from "../../model/models";

@Component({
  selector: "app-words-list",
  templateUrl: "./words-list.component.html",
  styleUrls: ["./words-list.component.css"]
})
export class WordsListComponent implements OnInit {
  constructor(private translateService: TranslateService) {
    this.words = this.translateService.getAllWords();
    this.translatedWord = this.translateService.translatedWord;
  }

  // @Input() words: Array<string>;

  words = [];
  formIsVisible = false;
  translatedWord = "";
  newWord = "";
  translated: any = "";
  // searchString = "";
  ngOnInit() {}
  onSubmit() {
    console.log(`submitting ${this.newWord}`);
    // this.translateService();
  }
  trans() {
    this.translated = this.translateService.fetchTranslation(this.newWord);
    console.log(this.translated);
  }
  gett() {
    this.translateService
      .fetchTranslation(this.newWord)
      .subscribe((res: ITranslation) => {
        this.translatedWord = res.text[0];
        console.log(res);
      });
  }
  // name = new FormControl();
  // updateName() {
  //   this.name.setValue("new val!!!");
  // }
  addNewWord() {
    console.log("new");
  }

  toggleFormVisibility() {
    this.formIsVisible = !this.formIsVisible;
  }
}
