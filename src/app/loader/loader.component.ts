import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {trigger, style, animate, transition, state} from "@angular/animations";
import {EventService} from "../core/event.service";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  animations: [
    trigger('state', [
      state('done', style({transform: 'translateY(-75vh)'})),
      state('loading', style({transform: 'translateY(0)'})),
      transition('* => loading', [
        animate('200ms ease-in-out')
      ])
    ])
  ]
})
export class LoaderComponent implements OnInit {

  @Output() onStateChange: EventEmitter<any> = new EventEmitter();
  public state: string = 'done';

  constructor(
    private event: EventService
  ) { }

  ngOnInit() {
    this.event.loaderEvent.subscribe((state) => {

      if ('loading' === state || 'saving' === state) {
        this.state = 'loading';
        document.body.style.overflow = 'hidden';
        this.onStateChange.emit(this.state);
      }

      if ('done' === state || null === state) {
        this.state = 'done';
        document.body.style.overflow = 'inherit';
        this.onStateChange.emit(this.state);
      }
    })
  }

  public isLoading() {
    return 'loading' === this.state;
  }

  protected spinnerAnimationDone() {
    if ('loading' === this.state) {
    }
  }
}
