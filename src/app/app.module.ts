import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JeuComposant } from './composants/jeu/jeu';
import { HomeComposant } from './composants/home/home';
import { TableRappelComposant } from './composants/table-rappel/table-rappel';

@NgModule({
  declarations: [
    AppComponent,
    HomeComposant,
    JeuComposant,
    TableRappelComposant
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
