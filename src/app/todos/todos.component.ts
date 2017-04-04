import {Component, OnChanges, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StoreService} from "../core/services/store.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, OnChanges {

  public addItemForm: FormGroup;
  public peoples: string[] = [];
  public todos: TodoModel[] = [];

  constructor(
    private fb: FormBuilder,
    private store: StoreService
  ) {
    this.createForm();
  }

  createForm() {
    this.peoples = [
      'John',
      'Alice',
      'Bob',
    ];

    this.addItemForm = this.fb.group({
      label: ['', Validators.required ],
      assigned: ''
    });
  }

  refresh() {
    this.store.listTodo().subscribe(todos => {
      this.todos = todos;
    })
  }

  ngOnInit() {
    this.refresh();
  }

  ngOnChanges() {
  }

  onSubmit({value, valid}: {value: TodoModel, valid: boolean}) {
    if (!valid) {
      return;
    }

    this.store.addTodo(value).subscribe(result => {
      if (true === result) {
        this.refresh();
        this.addItemForm.reset();
      }
    })
  }

}
