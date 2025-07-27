import { Component, inject } from '@angular/core';
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
  };

  handleSubmit() {
    const payload = this._buildPayload();
  }

  private _buildPayload() {
    const header = this.masterForm.header.value;

    return { header };
  }
}
