import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MyPipePipe } from "./my-pipe.pipe";
import { MyDirectiveDirective } from "./my-directive.directive";
import { WordChallengeComponent } from "./word-challenge/word-challenge.component";
import { SettingsComponent } from "./settings/settings.component";
import { WordsListComponent } from "./words-list/words-list.component";
import { ReactiveFormsModule } from "@angular/forms";
import { EditorComponent } from "./editor/editor.component";

@NgModule({
  declarations: [
    AppComponent,
    // WordList,
    MyPipePipe,
    MyDirectiveDirective,
    WordChallengeComponent,
    SettingsComponent,
    WordsListComponent,
    EditorComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
