import { Component, Input, EventEmitter, Output, inject, OnInit } from '@angular/core'; //prettier-ignore
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators as V,
} from '@angular/forms';

@Component({
  selector: 'app-cv-form-work-experience-component',
  standalone: false,
  templateUrl: './cv-form-work-experience-component.html',
  styleUrl: './cv-form-work-experience-component.css',
})
export class CvFormWorkExperienceComponent implements OnInit {
  @Input() listForm: FormGroup[] = [];
  @Output() runComplete = new EventEmitter<boolean | undefined>();

  private _fb = inject(FormBuilder);

  ngOnInit(): void {
    if (this.listForm.length <= 1) this.handleAddList();
  }

  getDateControl(index: number): FormControl {
    return this.listForm[index].controls['date'] as FormControl;
  }

  handleAddList() {
    this.listForm.push(this._createGroup());
  }

  private _createGroup() {
    return this._fb.group({
      date: [['01/2025', '02/2025'], [V.required]],
    });
  }
}
