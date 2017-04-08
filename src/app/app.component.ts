import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  protected title = 'My Todo App';
  protected loaderAnimation: boolean = false;

  ngOnInit() {
    /*setTimeout(() => {
      console.log(this.loaderAnimation);
      this.loaderAnimation = true;
      console.log(this.loaderAnimation);
    }, 15000)*/
  }

  protected loaderStateChange(state) {
    this.loaderAnimation = !(state === 'done')
    //console.log('loaderStateChange ', state, this.loaderAnimation);
  }
}
