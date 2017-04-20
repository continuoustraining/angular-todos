import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {BlurDirective} from "./loader/blur.directive";
import {MaterialModule} from "@angular/material";
import {LoaderComponent} from "./loader/loader.component";
import {TodosModule} from "./todos/todos.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {HttpModule} from "@angular/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {EventService} from "./core/event.service";
import {StoreService} from "./core/services/store.service";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BlurDirective,
        LoaderComponent,
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
        StoreService,
        EventService
      ]
    }).compileComponents();
  }));

  const title = 'My Todo App';

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual(title);
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(title);
  }));
});
