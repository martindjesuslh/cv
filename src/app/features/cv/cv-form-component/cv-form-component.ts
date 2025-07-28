import { Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators as V } from '@angular/forms';

@Component({
  selector: 'app-cv-form-component',
  standalone: false,
  templateUrl: './cv-form-component.html',
  styleUrl: './cv-form-component.css',
})
export class CvFormComponent {
  private _fb = inject(FormBuilder);

  public masterForm = {
    header: this._fb.group({
      fullName: ['', [V.required, V.minLength(3)]],
      address: ['', [V.required, V.minLength(3)]],
      email: ['', [V.required, V.email]],
      phone: ['', [V.required, V.minLength(8), V.maxLength(12)]],
    }),
    profileProfessional: this._fb.control('', [V.required, V.minLength(10)]),
  };

  public stepperActive = signal<number>(1);

  handleChangeStep(back?: boolean) {
    this.stepperActive.update((curr) => (back ? curr - 1 : curr + 1));
  }

  handleSubmit() {
    const payload = this._buildPayload();
  }

  private _buildPayload() {
    const header = this.masterForm.header.value;

    return { header };
  }
}
