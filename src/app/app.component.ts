import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CSCI5709 S21';
  general: boolean = true;

  hide(){
    this.general = false;
  }

  show(){
    this.general = true;
  }
}
