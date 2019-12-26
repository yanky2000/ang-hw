import { Component, OnInit } from "@angular/core";
import { SettingsService } from "../settings.service";
import { ISettings } from "src/model/models";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.css"]
})
export class SettingsComponent implements OnInit {
  constructor(private settingsService: SettingsService) {}

  ngOnInit() {}
  onSubmit(settings: ISettings) {
    this.settingsService.updateSettings(settings);
  }
}
