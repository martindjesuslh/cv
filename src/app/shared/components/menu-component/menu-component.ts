import { Component, inject, signal, computed } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Navigation } from '@services/navigation';
import { ScreenSizeService } from '@services/screen-size-service';

interface MyLinks {
  path: string;
  label: string;
  fragment?: string;
}

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.html',
  styleUrl: './menu-component.css',
  standalone: true,
  imports: [CommonModule, DrawerModule, ButtonModule],
})
export class MenuComponent {
  private readonly MOBILE_BREAKPOINT = 600;
  public readonly links: MyLinks[] = [
    { label: 'inicio', path: '/', fragment: 'home' },
    { label: 'cv', path: '/cv' },
    { label: 'about', path: '/', fragment: 'about' },
    { label: 'contact', path: '/', fragment: 'contact' },
  ];

  private screenSize = inject(ScreenSizeService);
  private navigation = inject(Navigation);

  public isOpen = signal<boolean>(false);
  private currentPath = this.navigation.currentUrl;
  public linkActiveIndex = computed(() => {
    const [url] = this.currentPath().split('#');
    return this.links.findIndex(({ path }) => {
      return url === path;
    });
  });
  private widthScreen = this.screenSize.width;
  public isMobile = computed(() => {
    const isMobile = this.widthScreen() <= this.MOBILE_BREAKPOINT;
    console.log(isMobile);
    return isMobile;
  });

  handleDrawer(): void {
    this.isOpen.update((curr) => !curr);
  }

  async handleNavigate(path: string, fragment?: string) {
    await this.navigation.go(path, { fragment });
    this.isOpen.set(false);
  }
}
