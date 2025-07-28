import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// primeNg
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
//components
import { SharedComponentsModule } from '../../shared/components/shared-components-module';
import { CvFormComponent } from './cv-form-component/cv-form-component';
import { CvSectionComponent } from './cv-section-component/cv-section-component';
import { CvFormKeyCompetencesComponent } from './cv-form-key-competences-component/cv-form-key-competences-component';
import { CvFormHeaderComponentComponent } from './cv-form-header-component-component/cv-form-header-component-component';

@NgModule({
  declarations: [
    CvFormComponent,
    CvSectionComponent,
    CvFormHeaderComponentComponent,
    CvFormKeyCompetencesComponent,
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    ButtonModule,
    ConfirmDialogModule,
    StepperModule,
  ],
  providers: [ReactiveFormsModule],
  exports: [CvFormComponent],
})
export class CvModuleModule {}
