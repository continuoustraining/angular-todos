import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormComponent } from './add-form.component';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

describe('AddFormComponent', () => {
  let component: AddFormComponent;
  let fixture: ComponentFixture<AddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFormComponent ],
      imports: [
        BrowserModule,
        ReactiveFormsModule, FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create from builder', () => {
    const fb = component.addItemGroup;

    expect(component).toBeTruthy();
    expect(fb.contains('label')).toBeTruthy();
    expect(fb.contains('assigned')).toBeTruthy();
    expect(fb.contains('note')).toBeTruthy();
    expect(Object.keys(fb.controls).length).toBe(3);
  });

  it('Label must be required', () => {
    const fc = component.addItemGroup.get('label');

    fc.setValue('');
    expect(fc.valid).toBeFalsy();

    fc.setValue('Foo');
    expect(fc.valid).toBeTruthy();
  });

  it('Assigned can be optional', () => {
    /*const fc = component.addItemGroup.get('assigned');

    fc.setValue('');

    expect(fc.valid).toBeTruthy();*/
  });

  it('Assigned must be valid string', () => {
    const fc = component.addItemGroup.get('assigned');

    fc.setValue('a');
    fixture.detectChanges();
    expect(fc.valid).toBeTruthy();

    /*fc.setValue('Bar');
    expect(fc.valid).toBeTruthy();

    fc.setValue('Foo Bar Baz');
    expect(fc.valid).toBeTruthy();

    fc.setValue('石头');
    expect(fc.valid).toBeTruthy();

    fc.setValue('aabbccddaabbccddaabbccddaabbccddaabbccddaabbccddaabbccddaabbccddaabbccddaabbccddaabbccddaabbccdd');
    expect(fc.valid).toBeFalsy();

    fc.setValue(0);
    expect(fc.valid).toBeFalsy();

    fc.setValue({});
    expect(fc.valid).toBeFalsy();

    fc.setValue(null);
    expect(fc.valid).toBeFalsy();

    fc.setValue(false);
    expect(fc.valid).toBeFalsy();

    fc.setValue(true);
    expect(fc.valid).toBeFalsy();*/
  });

  it('Note must be lower then 64 chars', () => {
    /*const fc = component.addItemGroup.get('note');

    fc.setValue('');
    expect(fc.valid).toBeTruthy();

    fc.setValue('Fooo');
    expect(fc.valid).toBeTruthy();

    fc.setValue("Foo\n\nBar Baz");
    expect(fc.valid).toBeTruthy();

    fc.setValue('aabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddeeaabbccddee');
    expect(fc.valid).toBeFalsy();*/
  });
});
