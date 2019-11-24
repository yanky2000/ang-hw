import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordList } from './my-comp/my-comp.component';
import { MyPipePipe } from './my-pipe.pipe';
import { MyDirectiveDirective } from './my-directive.directive';
import { WordChallengeComponent } from './word-challenge/word-challenge.component';
import { SettingsComponent } from './settings/settings.component';
import { WordsListComponent } from './words-list/words-list.component';

@NgModule({
  declarations: [
    AppComponent,
    // WordList,
    MyPipePipe,
    MyDirectiveDirective,
    WordChallengeComponent,
    SettingsComponent,
    WordsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
