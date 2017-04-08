import {Injectable, EventEmitter} from '@angular/core'

@Injectable()
export class EventService {

  public loaderEvent: EventEmitter<string>

  constructor() {
    this.loaderEvent = new EventEmitter()
  }

  public dispatch(type: string, message: string) {
    if ('loader' === type) {
      this.loaderEvent.emit(message)
    }
  }
}
