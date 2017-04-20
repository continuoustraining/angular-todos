import {TestBed, inject, async} from '@angular/core/testing';

import { StoreService } from './store.service';
import {EventService} from "../event.service";
import {FakeStoreService} from "./fake-store.service";

import FixtureTodos from "./FixtureTodos";

describe('StoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventService,
        { provide: StoreService, useClass: FakeStoreService }
      ],
    });
  });

  it('should ...', inject([StoreService], (service: StoreService) => {
    expect(service).toBeTruthy();
  }));

  it('List todos equal to fixture data', async(
    inject([StoreService], (service: StoreService) => {
      service.listTodo().subscribe((todos: TodoModel[]) => {
        expect(todos.length).toEqual(3);
      })
    })
  ));

  it('remove todo from collection by label', inject([StoreService], (service: StoreService) => {
    const todos = service.fakeRemoveFromLabel(FixtureTodos, 'B');

    expect(todos.length).toEqual(2);
  });

  it('remove todo on deleteTodo event', async(
    inject([StoreService, EventService], (service: StoreService, event: EventService) => {
      event.dispatch('deleteTodo', 'B');
      service.listTodo().subscribe((todos: TodoModel[]) => {
        expect(todos.length).toEqual(2);
      })
    })
  ));
});
