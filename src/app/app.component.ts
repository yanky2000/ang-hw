import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  title = 'my-app';
  message = 'hello from parent!'

  counter = 0
  onBubble(counter:number) {
    this.counter = counter;
  }
}
