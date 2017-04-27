import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {addFormValidator} from "./add-form.validator";

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  public addItemGroup: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  private createForm() {
    this.addItemGroup = this.fb.group({
      label: ['', Validators.required ],
      assigned: ['', addFormValidator.assigned],
      note: ['', Validators.maxLength(64)]
    })
  }

  ngOnInit() {
  }

}
