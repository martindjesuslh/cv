import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection, LOCALE_ID } from '@angular/core'; //prettier-ignore
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
//base
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
//prime-ng
import theme from '@styles/theme';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MenuComponent } from './shared/components/menu-component/menu-component';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs);

@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule, MenuComponent],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideAnimations(),
    ScreenOrientation,
    theme,
    { provide: LOCALE_ID, useValue: 'es' },
  ],
  bootstrap: [App],
})
export class AppModule {}
