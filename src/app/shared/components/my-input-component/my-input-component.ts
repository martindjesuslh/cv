import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { getErrorMessage } from '@utils/forms';

@Component({
  selector: 'app-my-input-component',
  standalone: false,
  templateUrl: './my-input-component.html',
  styleUrl: './my-input-component.css',
})
export class MyInputComponent {
  @Input() myControl: AbstractControl | null = null;
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: HTMLInputElement['type'] = 'text';
  @Input() helpText?: string;

  get errorMessage(): string | null {
    return getErrorMessage(this.myControl);
  }

  get className() {
    return this.myControl?.invalid && this.myControl.touched
      ? 'ng-invalid ng-dirty'
      : '';
  }

  handleChange(e: Event) {
    if (!this.myControl) return;

    const { value } = e.target as HTMLInputElement;
    this.myControl.setValue(value, { emitValue: true });
  }

  handleBlur() {
    this.myControl?.markAsTouched();
  }
}
