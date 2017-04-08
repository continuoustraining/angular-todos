import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { TodosComponent } from './todos.component';
import { StoreService } from '../core/services/store.service';
import {EventService} from "../core/event.service";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule, FormsModule,
  ],
  exports: [
    TodosComponent
  ],
  declarations: [
    TodosComponent
  ],
  providers: [
    StoreService,
    EventService
  ]
})
export class TodosModule { }
