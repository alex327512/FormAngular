import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  DialogForm } from './app.component';



import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent, DialogForm
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  entryComponents:[AppComponent, DialogForm],
  providers: [],
  exports: [DialogForm, MaterialModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
