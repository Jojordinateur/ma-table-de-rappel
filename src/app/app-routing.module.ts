import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableRappelComposant } from './composants/table-rappel/table-rappel';
import { JeuComposant } from './composants/jeu/jeu';
import { HomeComposant } from './composants/home/home';

const routes: Routes = [
  { path: '', component: HomeComposant }, // Route par défaut
  { path: 'liste', component: TableRappelComposant }, // Route par défaut
  { path: 'jeu', component: JeuComposant },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
