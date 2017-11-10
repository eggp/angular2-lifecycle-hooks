import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TestComponent implements OnInit {
  componentName = 'Test';
  @Input() testData;

  constructor() {
    console.log('constructor, testData: ', this.testData);
  }

  ngOnInit() {
    console.log(`${this.componentName} onInit, testData: `, this.testData);
  }

}
