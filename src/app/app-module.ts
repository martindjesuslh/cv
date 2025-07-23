import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core'; //prettier-ignore
import { BrowserModule } from '@angular/platform-browser';
//base
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
//prime-ng
import theme from '@styles/theme';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule, ButtonModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideAnimations(),
    theme,
  ],
  bootstrap: [App],
})
export class AppModule {}
