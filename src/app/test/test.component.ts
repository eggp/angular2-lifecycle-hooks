import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TestComponent implements OnInit, OnDestroy, DoCheck, OnChanges {
  componentName = 'Test';
  @Input() testData;

  constructor() {
    console.log('constructor, testData: ', this.testData);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`${this.componentName} onChanges: `, changes);
  }

  ngDoCheck(): void {
    console.log(`${this.componentName} doCheck`);
  }

  ngOnInit() {
    console.log(`${this.componentName} onInit, testData: `, this.testData);
  }

  ngOnDestroy(): void {
    console.log(`${this.componentName} onDestroy`);
  }
}
