import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { WordsListComponent } from "./components/words-list/words-list.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WordChallengeComponent } from "./components/word-challenge/word-challenge.component";
import { SettingsComponent } from "./components/settings/settings.component";

const routes: Routes = [
  { path: "dictionary", component: WordsListComponent },
  { path: "settings", component: SettingsComponent },
  { path: "exercises", component: WordChallengeComponent },
  { path: "", redirectTo: "/dictionary", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
