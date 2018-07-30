import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoreModule } from  './core/core.module';
import {HeroesComponent } from '/heroes/heroes.component';
import { FilterTextComponent } from './shared/filter-text/filter-text.component';
import { NavComponent } from './core/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    FilterTextComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
