import {Component, OnInit, HostBinding} from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  public state: string = 'done';
  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      this.state = 'loading';
      document.body.style.overflow = 'hidden';
    }, 2000);

    setTimeout(() => {
      this.state = 'done';
      document.body.style.overflow = 'inherit';
    }, 10000);
  }

  public isLoading() {
    return 'loading' === this.state;
  }
}
