import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";

@Injectable()
export class StoreService {

  constructor() { }

  public addTodo(item: TodoModel): Observable<boolean> {
    const todos = this.getTodos();

    localStorage.setItem('todos', JSON.stringify([
      ...todos,
      item,
    ]));

    return Observable
      .of(true)
      .delay(300)
    ;
  }

  public listTodo(): Observable<TodoModel[]> {
    const todos = this.getTodos();

    return Observable
      .of(todos)
      .delay(100)
    ;
  }

  protected getTodos() {
    const todosJson = localStorage.getItem('todos');

    if (null === todosJson) {
      return [];
    }

    return JSON.parse(todosJson);
  }
}
