import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";
import {EventService} from "../event.service";

@Injectable()
export class StoreService {

  protected static removeFromLabel(collection: TodoModel[], label: string) {
    return collection.filter((todo) => todo.label !== label)
  }

  constructor(
    private event: EventService
  ) {
    this.deleteTodoOnEvent();
  }

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
      .delay(1000)
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
      .delay(1000)
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

  protected saveTodos(todos: TodoModel[]) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  protected deleteTodoOnEvent() {
    this.event.deleterEvent.subscribe((label) => {
      const todos = StoreService.removeFromLabel(this.getTodos(), label);

      this.saveTodos(todos);
    })
  }
}
