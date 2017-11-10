import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  visibleButton = true;
  // testData: string = 'haUgyanazAkkorNemValtozik';
  testData: string = new Date().toTimeString();

  changeInputTestData() {
    // this.testData = 'haUgyanazAkkorNemValtozik';
    this.testData = new Date().toTimeString();
  }
}
