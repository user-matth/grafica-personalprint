import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent
  ], exports: [
  ], imports: [
    BrowserModule
  ]
})
export class PagesModule { }
