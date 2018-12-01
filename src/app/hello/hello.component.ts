import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <div>
      <h1>Hello {{ name }}!!</h1>
      <app-foo></app-foo>
      <input [(ngModel)]="value">
      <button (click)="handleClick()">Click!</button>
    </div>
  `,
    styles: [`
    :host {
      display: block;
      border: 1px solid black;
    }

    div {
      padding: 16px;
      text-align: center;
    }
  `]
})
export class HelloComponent {
    value: string;

    @Input() name: string;
    @Output() clickButton: EventEmitter<string> = new EventEmitter();

    handleClick() {

        console.log('click');

        this.clickButton.emit(this.value);
        this.value = '';
    }
}
