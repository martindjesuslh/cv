import { inject, Injectable, signal } from '@angular/core';
import { NavigationExtras, Router, Event, NavigationEnd } from '@angular/router'; //prettier-ignore
import { ViewportScroller } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class Navigation {
  private _router = inject(Router);
  private _viewScroll = inject(ViewportScroller);
  public currentUrl = signal<string>(this.getCurrentUrl());

  constructor() {
    this._router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl.set(this.getCurrentUrl());
      }
    });
  }

  private getCurrentUrl(): string {
    return this._router.url;
  }

  back(): void {
    window.history.back();
  }

  async go(path: string, extras?: NavigationExtras): Promise<void> {
    await this._router.navigate([path], extras);
    if (extras?.fragment) this.scrollToIdPage(extras.fragment);
  }

  private scrollToIdPage(fragment: string) {
    this._viewScroll.scrollToAnchor(fragment, { behavior: 'smooth' });
  }
}
