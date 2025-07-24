import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//pages
import { HomePage } from '@views/home/home-page';

const routes: Routes = [
  { path: '', component: HomePage },
  {
    path: '**',
    loadComponent: () =>
      import('@views/error-page/error-page').then((m) => m.ErrorPage),
  },
  {
    path: 'cv',
    loadComponent: () => import('@views/cv-page/cv-page').then((m) => m.CvPage),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
