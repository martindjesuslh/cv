import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cv-form-header-component-component',
  standalone: false,
  templateUrl: './cv-form-header-component-component.html',
  styleUrl: './cv-form-header-component-component.css',
})
export class CvFormHeaderComponentComponent {
  @Input() myForm!: FormGroup;
  @Output() runChangeStep = new EventEmitter<void>();

  handleComplete() {
    this.runChangeStep.emit();
  }
}
