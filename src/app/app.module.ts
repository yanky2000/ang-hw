import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { WordChallengeComponent } from "./components/word-challenge/word-challenge.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { WordsListComponent } from "./components/words-list/words-list.component";
import { ReactiveFormsModule } from "@angular/forms";
import { AddWordComponent } from "./components/add-word/add-word.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { NavComponent } from "./components/nav/nav.component";

@NgModule({
  declarations: [
    AppComponent,
    WordChallengeComponent,
    SettingsComponent,
    WordsListComponent,
    AddWordComponent,
    PageNotFoundComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
