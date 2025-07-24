import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core'; //prettier-ignore
import { BrowserModule } from '@angular/platform-browser';
//base
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
//prime-ng
import theme from '@styles/theme';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MenuComponent } from './shared/components/menu-component/menu-component';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule, MenuComponent],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideAnimations(),
    ScreenOrientation,
    theme,
  ],
  bootstrap: [App],
})
export class AppModule {}
