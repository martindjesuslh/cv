import { Component, inject, OnInit, Input, Output, EventEmitter } from '@angular/core'; //prettier-ignore
import { FormArray, FormBuilder, FormControl, FormGroup, Validators as V } from '@angular/forms'; //prettier-ignore
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-cv-form-key-competences-component',
  templateUrl: './cv-form-key-competences-component.html',
  styleUrl: './cv-form-key-competences-component.css',
  standalone: false,
  providers: [ConfirmationService],
})
export class CvFormKeyCompetencesComponent implements OnInit {
  @Input() listForm: FormGroup[] = [];
  @Output() private _runChangeStep = new EventEmitter<boolean | undefined>();

  private _fb = inject(FormBuilder);
  private _confirmService = inject(ConfirmationService);

  ngOnInit(): void {
    if (!this.listForm.length) this.handleAddList();
  }

  getMyCompetencies(index: number): FormArray {
    return this.listForm[index].get('competencies') as FormArray;
  }

  createCompetenciesControl(): FormControl {
    return this._fb.control('', [V.required, V.minLength(4)]);
  }

  private _createGroup() {
    return this._fb.group({
      title: ['', [V.required, V.minLength(5)]],
      competencies: this._fb.array([this.createCompetenciesControl()]),
    });
  }

  handleAddList(): void {
    this.listForm.push(this._createGroup());
  }

  handleAddCompetencies(index: number) {
    this.getMyCompetencies(index).push(this.createCompetenciesControl());
  }

  handleRemoveCompetencies(listIndex: number, competenceIndex: number): void {
    this.getMyCompetencies(listIndex).removeAt(competenceIndex);
  }

  handleRemoveList(listIndex: number) {
    const { title } = this.listForm[listIndex].value;
    const message = `Are you sure remove this list ${title}`;

    this._confirmService.confirm({
      message,
      accept: () => this.listForm.splice(listIndex, 1),
    });
  }

  handleResetList(listIndex: number) {
    this.listForm[listIndex] = this._createGroup();
  }

  handleComplete(back?: boolean) {
    this._runChangeStep.emit(back);
    if (!back) this._cleanFormIncomplete();
  }

  private _cleanFormIncomplete() {
    for (let i = this.listForm.length - 1; i >= 0; i--)
      if (!this.listForm[i].valid) this.listForm.splice(i, 1);
  }
}
