import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
//components
import { SharedComponentsModule } from '../../shared/components/shared-components-module';
import { CvFormComponent } from './cv-form-component/cv-form-component';
import { CvSectionComponent } from './cv-section-component/cv-section-component';

@NgModule({
  declarations: [CvFormComponent, CvSectionComponent],
  imports: [CommonModule, SharedComponentsModule, ButtonModule],
  providers: [ReactiveFormsModule],
  exports: [CvFormComponent],
})
export class CvModuleModule {}
