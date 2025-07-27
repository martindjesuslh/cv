import { Component } from '@angular/core';
import { CvModuleModule } from '@features/cv/cv-module-module';

@Component({
  selector: 'app-cv-page',
  imports: [CvModuleModule],
  templateUrl: './cv-page.html',
  styleUrl: './cv-page.css',
})
export class CvPage {}
