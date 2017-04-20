import {StoreService} from "./store.service";
import {Injectable} from "@angular/core";
import FixtureTodos from "./FixtureTodos";

@Injectable()
export class FakeStoreService extends StoreService {

  private _fixtureTodos: TodoModel[] = FixtureTodos;

  protected getTodos() {
    return this._fixtureTodos;
  }

  /**
   * @param collection
   * @param label
   * @returns {any}
   */
  public fakeRemoveFromLabel(collection: TodoModel[], label: string): TodoModel[] {
    return FakeStoreService.removeFromLabel(collection, label)
  }

  protected saveTodos(todos: TodoModel[]) {
    this._fixtureTodos = todos;
  }
}
