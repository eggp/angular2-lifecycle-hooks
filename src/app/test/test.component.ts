import {
  AfterViewChecked,
  AfterViewInit,
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
export class TestComponent implements OnInit, OnDestroy, DoCheck, OnChanges, AfterViewInit, AfterViewChecked {
  componentName = 'Test';
  @Input() testData;
  @Input() notModified;

  constructor() {
    console.log('constructor, testData: ', this.testData);
  }

  ngAfterViewChecked(): void {
    console.log(`${this.componentName} afterViewChecked`);
  }

  ngAfterViewInit(): void {
    console.log(`${this.componentName} afterViewInit`);
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
