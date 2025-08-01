import { Component, Input, OnInit, signal, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, Validators as V } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';

import { getErrorMessage } from '@utils/forms';

type DateFormat = 'dd/mm/yy' | 'mm/yy' | 'yy';

@Component({
  selector: 'app-my-date-component',
  standalone: false,
  templateUrl: './my-date-component.html',
  styleUrl: './my-date-component.css',
})
export class MyDateComponent implements OnInit {
  @Input() myControl: AbstractControl | null = null;
  get control() {
    return this.myControl as FormControl;
  }
  @Input() view: DatePicker['view'] = 'date';
  @Input() dateFormat: DateFormat = 'dd/mm/yy';
  @Input() range?: boolean;
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() helpText?: string;

  public dateStart = new FormControl('', [V.required]);
  public dateEnd = new FormControl('', [V.required]);

  @ViewChild('myDateEnd') private myDatePicker!: DatePicker;

  get errorMessage(): string | null {
    return getErrorMessage(this.myControl);
  }

  get className() {
    return this.myControl?.invalid && this.myControl.touched
      ? 'ng-invalid ng-dirty'
      : '';
  }

  ngOnInit(): void {
    this._updateLocalControls();
  }

  private _updateLocalControls() {
    const [startIso, endIso] = this.myControl?.value;

    if (!startIso || !endIso) return;

    const start = this._formatDateForControl(startIso);
    const end = this._formatDateForControl(endIso);

    this.dateStart.setValue(start);
    this.dateEnd.setValue(end);
  }

  private _formatDateForControl(value: string): string {
    const date = this._dateParse(value);
    if (this.view === 'month') {
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${month}/${year}`;
    } else {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    }
  }

  handleChangeStart() {
    if (this.dateStart.invalid) return;

    setTimeout(() => {
      this.myDatePicker.inputfieldViewChild?.nativeElement.focus();
      this._validateRange();
    }, 500);
  }

  private _validateRange() {
    const start = this._dateParse(`${this.dateStart.value}`);
    const end = this._dateParse(`${this.dateEnd.value}`);

    if (start < end) {
      this.myControl?.setErrors(null);
      this._updateMyControl();
    } else this.myControl?.setErrors({ range: true });

    this.myControl?.markAsTouched();
  }

  private _updateMyControl() {
    const start = this._dateParse(`${this.dateStart.value}`).toISOString();
    const end = this._dateParse(`${this.dateEnd.value}`).toISOString();

    this.myControl?.patchValue([start, end]);
  }

  private _dateParse(value: string) {
    let date = value;
    if (this.view !== 'date') date = `01/${value}`;

    console.log(date);
    return new Date(date);
  }

  handleComplete() {
    this._validateRange();
    if (!this.range) return;
  }
}
