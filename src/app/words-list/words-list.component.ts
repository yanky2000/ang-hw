import { Component, OnInit, Input } from "@angular/core";
import { FormControl } from '@angular/forms';

@Component({
  selector: "app-words-list",
  templateUrl: "./words-list.component.html",
  styleUrls: ["./words-list.component.css"]
})
export class WordsListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() words: Array<string>;

  handleInputChange(event) {
    console.log(event, 2);
  }
  searchString = "";
  onSubmit() { console.log('submit')}
  name = new FormControl()
  updateName() {this.name.setValue('new val!!!')}
}
