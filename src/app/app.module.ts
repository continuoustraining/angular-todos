import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { TodosModule } from './todos/todos.module';

import 'hammerjs';
import { LoaderComponent } from './loader/loader.component';
import { BlurDirective } from './loader/blur.directive';
import {EventService} from "./core/event.service";

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    BlurDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    TodosModule,
  ],
  providers: [
    EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
