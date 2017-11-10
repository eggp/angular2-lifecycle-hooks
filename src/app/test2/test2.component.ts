import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit, OnDestroy, DoCheck, OnChanges, AfterViewInit,
  AfterViewChecked, AfterContentInit, AfterContentChecked {
  componentName = 'Test2';
  @Input() testData;
  @Input() notModified;

  constructor() {
    console.log(`${this.componentName} constructor, testData: `, this.testData);
  }

  ngAfterContentInit(): void {
    console.log(`${this.componentName} afterContentInit`);
  }

  ngAfterContentChecked(): void {
    console.log(`${this.componentName} afterContentChecked`);
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
