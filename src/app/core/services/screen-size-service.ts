import { Injectable, OnDestroy, signal } from '@angular/core';
import { fromEvent, Subscription, throttleTime } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScreenSizeService implements OnDestroy {
  private resizeSub: Subscription;
  public height = signal<number>(0);
  public width = signal<number>(0);

  constructor() {
    this.resizeSub = fromEvent(window, 'resize')
      .pipe(throttleTime(250))
      .subscribe(() => this.updateSizes());
  }

  private updateSizes() {
    this.height.set(window.innerHeight);
    this.width.set(window.innerWidth);
  }

  ngOnDestroy(): void {
    this.resizeSub.unsubscribe();
  }
}
