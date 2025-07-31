import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { DatePickerModule } from 'primeng/datepicker';
//components
import { MyInputComponent } from './my-input-component/my-input-component';
import { MyDateComponent } from './my-date-component/my-date-component';

@NgModule({
  declarations: [MyInputComponent, MyDateComponent],
  imports: [
    CommonModule,
    InputTextModule,
    TextareaModule,
    DatePickerModule,
    ReactiveFormsModule,
  ],
  exports: [MyInputComponent, MyDateComponent],
})
export class SharedComponentsModule {}
