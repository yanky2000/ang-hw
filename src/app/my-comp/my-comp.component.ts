import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { MyServiceService } from "../my-service.service";

@Component({
  selector: "app-words-list",
  templateUrl: "./my-comp.component.html",
  styleUrls: ["./my-comp.component.css"]
})
export class WordList implements OnInit {
  countries = [];
  constructor(private FetchService: MyServiceService) {}
  ngOnInit() {}

  @Input("message") word: string;
  title2 = "THIS IS TITLE";

  @Output() bubble = new EventEmitter<number>();

  counter = 0;

  goBubble() {
    this.bubble.emit(++this.counter);
  }

  async getCountries() {
    this.countries = await this.FetchService.loadData()
  }


}
