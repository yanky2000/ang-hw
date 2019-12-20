import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { MyPipePipe } from "./my-pipe.pipe";
import { MyDirectiveDirective } from "./my-directive.directive";
import { WordChallengeComponent } from "./word-challenge/word-challenge.component";
import { SettingsComponent } from "./settings/settings.component";
import { WordsListComponent } from "./words-list/words-list.component";
import { ReactiveFormsModule } from "@angular/forms";
import { EditorComponent } from "./editor/editor.component";
import { AddWordComponent } from './add-word/add-word.component';

@NgModule({
  declarations: [
    AppComponent,
    MyPipePipe,
    MyDirectiveDirective,
    WordChallengeComponent,
    SettingsComponent,
    WordsListComponent,
    EditorComponent,
    AddWordComponent
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
