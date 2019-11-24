import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MyServiceService {
  private countries = [];
  constructor() {}

  async loadData() {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    return await res.json();
  }

  log() {
    console.log("service is working");
  }
}
