import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.css"]
})
export class SettingsComponent implements OnInit {
  constructor() {}

  languages = ["Russian", "English"];
  language = this.languages[0];
  numOfWords = 5;
  challengeTime = 10;

  ngOnInit() {}
}
