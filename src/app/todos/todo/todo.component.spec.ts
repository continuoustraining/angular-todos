import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import {BrowserModule, By} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {EventService} from "../../core/event.service";

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let label = 'My Todo label';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoComponent ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        FlexLayoutModule
      ],
      providers: [ EventService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    component.label = label;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should see the todo label', async(() => {
    const native = fixture.debugElement.nativeElement;
    expect(native.querySelector('h3').textContent).toContain(label);
  }));

  it('Should contain md-checkbox', async(() => {
    const native = fixture.debugElement.nativeElement;
    expect(!!native.querySelector('md-checkbox')).toBeTruthy();
  }));

  it('Should contain md-button', async(() => {
    const native = fixture.debugElement.nativeElement;
    expect(!!native.querySelector('button')).toBeTruthy();
  }));

  it('Should emit a delete event', async(() => {
    const btn = fixture.debugElement.query(By.css('button'));
    const deleterEvent = component.deleterEvent;
    let deletedLabel = '';

    deleterEvent.subscribe((label: string) => deletedLabel = label);
    btn.triggerEventHandler('click', null);

    expect(deletedLabel).toEqual(component.label);
  }))
});
