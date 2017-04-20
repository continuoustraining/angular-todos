import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {EventService} from "../../core/event.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input('label') label: string;
  @Input('finished') finished: boolean;

  @Output('onDeleted') deleterEvent: EventEmitter<any>;

  constructor(
    private event: EventService
  ) {
    this.deleterEvent = event.deleterEvent;
  }

  ngOnInit() {
  }

  protected remove() {
    this.event.dispatch('deleteTodo', this.label);
  }
}
