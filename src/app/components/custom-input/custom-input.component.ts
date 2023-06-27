import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent {
  @Input() value!: string;
  @Input() placeholder!:string;
  @Input() isPassword:string = 'text';
  @Input() wid:number|null = null;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  inputValue!: string;

  onInputChange() {
    this.value = this.inputValue;
    this.valueChange.emit(this.value);

    console.log('all: ', this.value, this.placeholder, this.isPassword, this.wid)
  }
}
