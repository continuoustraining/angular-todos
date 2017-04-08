import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";
import {EventService} from "../event.service";

@Injectable()
export class StoreService {

  constructor(
    private event: EventService
  ) { }

  public addTodo(item: TodoModel): Observable<boolean> {
    this.event.dispatch('loader', 'saving');
    const todos = this.getTodos();

    localStorage.setItem('todos', JSON.stringify([
      ...todos,
      item,
    ]));

    return Observable
      .create((observer) => {
        observer.onNext(true);
        observer.onCompleted();
      })
      .delay(3000)
      .finally(() => {
        this.event.dispatch('loader', 'done');
      })
    ;
  }

  public listTodo(): Observable<TodoModel[]> {
    this.event.dispatch('loader', 'saving');
    const todos = this.getTodos();

    return Observable
      .create((observer) => {
        observer.next(todos);
        observer.complete();
      })
      .delay(3000)
      .finally(() => {
        this.event.dispatch('loader', 'done');
      })
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
