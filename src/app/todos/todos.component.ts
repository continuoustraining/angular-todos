import {Component, OnChanges, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from "@angular/forms"
import {StoreService} from "../core/services/store.service"

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  public addItemForm: FormGroup
  public peoples: string[] = [　'John',　'Alice',　'Bob', '石头'　]
  public todos: TodoModel[] = []

  constructor(
    private fb: FormBuilder,
    private store: StoreService
  ) {
    this.createForm()
  }

  protected createForm() {
    this.addItemForm = this.fb.group({
      label: ['', Validators.required ],
      assigned: 'Alice'
    })
  }

  protected refresh() {
    this.store.listTodo().subscribe(todos => {
      this.todos = todos
    })
  }

  ngOnInit() {
    this.refresh()

    /*this.addItemForm.patchValue({
      label: 'I love angular',
      assigned: 'Bob',
    });*/

    this.addItemForm.get('label').valueChanges.subscribe(value => {
      console.log('label : ', value)
    })
  }

  onSubmit({value, valid}: {value: TodoModel, valid: boolean}) {
    if (!valid) {
      return
    }

    this.store.addTodo(value).subscribe(result => {
      if (true === result) {
        this.refresh()
        this.addItemForm.reset()
      }
    })
  }

}
