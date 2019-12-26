import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WordsListComponent } from "./words-list/words-list.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WordChallengeComponent } from "./word-challenge/word-challenge.component";
import { SettingsComponent } from "./settings/settings.component";

const routes: Routes = [
  { path: "dictionary", component: WordsListComponent },
  { path: "settings", component: SettingsComponent },
  { path: "excersices", component: WordChallengeComponent },
  { path: "", redirectTo: "/words", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
