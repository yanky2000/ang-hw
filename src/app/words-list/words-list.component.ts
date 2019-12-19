import { Component, OnInit, Input } from "@angular/core";
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

  // @Input() words: Array<string>;

  words = [];
  formIsVisible = false;
  newWord = "";
  // searchString = "";
  ngOnInit() {}
  onSubmit() {
    console.log(`submitting ${this.newWord}`);
    // this.translateService();
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
