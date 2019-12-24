import { Component, OnInit } from "@angular/core";
import { Store } from "../store.service";
import { IDictionary } from "src/model/models";

@Component({
  selector: "app-words-list",
  templateUrl: "./words-list.component.html",
  styleUrls: ["./words-list.component.css"]
})
export class WordsListComponent implements OnInit {
  words: any;

  constructor(private store: Store) {
  }

  formIsVisible = false;

  ngOnInit() {}

  toggleFormVisibility() {
    this.formIsVisible = !this.formIsVisible;
  }
}
