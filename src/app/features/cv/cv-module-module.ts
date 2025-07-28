import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// primeNg
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
//components
import { SharedComponentsModule } from '../../shared/components/shared-components-module';
import { CvFormComponent } from './cv-form-component/cv-form-component';
import { CvSectionComponent } from './cv-section-component/cv-section-component';

@NgModule({
  declarations: [CvFormComponent, CvSectionComponent],
  imports: [CommonModule, SharedComponentsModule, ButtonModule, StepperModule],
  providers: [ReactiveFormsModule],
  exports: [CvFormComponent],
})
export class CvModuleModule {}
