import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  scale = 1;
  print() {
      console.log("binduje");
  }
  zoom(deltaY: number) {
    const direction = deltaY < 0 ? -1 : 1;
    this.scale += 0.1 * direction;
  }
}
