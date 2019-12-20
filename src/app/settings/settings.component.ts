import { Component, OnInit } from "@angular/core";
import { SettingsService } from "../settings.service";
import { ISettings } from "src/model/models";
import {langMap} from '../../constants'

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.css"]
})
export class SettingsComponent implements OnInit {
  settings: ISettings;
  key: any
  constructor(private settingService: SettingsService) {
    this.settings = this.settingService.getSettings();
    this.key = langMap.ru
  }

  languages = ["Russian", "English"];
  language = this.languages[0];
  numOfWords = 5;
  challengeTime = 10;

  ngOnInit() {
    console.log(this.key)
  }
}
