import { Component, OnInit } from "@angular/core";
import { ISettings } from "src/model/models";
import { SettingsService } from "src/app/services/settings.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.css"]
})
export class SettingsComponent implements OnInit {
  settings: ISettings;

  constructor(private settingsService: SettingsService) {
    this.settings = settingsService.settings;
  }

  ngOnInit() {}

  onSubmit(settings: ISettings) {
    this.settingsService.updateSettings(settings);
  }
}
