import { Component, OnInit } from "@angular/core";
import { SettingsService } from "../settings.service";
import { ISettings } from "src/model/models";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.css"]
})
export class SettingsComponent implements OnInit {
  settings: ISettings;
  constructor(private settingService: SettingsService) {
    this.settings = this.settingService.getSettings();
  }

  ngOnInit() {}
  onSubmit() {
    this.settingService.setSettings(this.settings);
  }
}
