import {Injectable, EventEmitter} from '@angular/core'

@Injectable()
export class EventService {

  public loaderEvent: EventEmitter<string>
  public deleterEvent: EventEmitter<string>

  constructor() {
    this.loaderEvent = new EventEmitter()
    this.deleterEvent = new EventEmitter()
  }

  public dispatch(type: string, message: string) {
    if ('loader' === type) {
      this.loaderEvent.emit(message)
    }

    if ('deleteTodo' === type) {
      this.deleterEvent.emit(message)
    }
  }
}
