import { inject, Injectable, signal } from '@angular/core';
import { NavigationExtras, Router, Event,NavigationEnd } from '@angular/router'; //prettier-ignore

@Injectable({ providedIn: 'root' })
export class Navigation {
  private _router = inject(Router);
  public currentPath = signal<string>(this.getCurrentUrl());

  constructor() {
    this._router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentPath.set(this.getCurrentUrl());
      }
    });
  }

  private getCurrentUrl() {
    return this._router.url.split('?')[0];
  }

  back(): void {
    window.history.back();
  }

  go(path: string, extras?: NavigationExtras): void {
    console.log('TE', path);
    this._router.navigate([path], extras);
  }
}
