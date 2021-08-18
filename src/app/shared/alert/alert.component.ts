import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Alert } from './alert.model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=> AlertComponent),
      multi: true
    }
  ]
})
export class AlertComponent implements OnInit, ControlValueAccessor {

  @Input() alerta: Alert;

  value: any
  onChange: any

  constructor() { }
  ngOnInit(): void { }

  setValue(value: any) {
    this.value = value
    this.onChange(this.value)
  }
  writeValue(obj: any): void {
    this.value = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {  }

}
