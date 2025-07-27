import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
//components
import { MyInputComponent } from './my-input-component/my-input-component';

@NgModule({
  declarations: [MyInputComponent],
  imports: [CommonModule, InputTextModule, TextareaModule],
  exports: [MyInputComponent],
})
export class SharedComponentsModule {}
