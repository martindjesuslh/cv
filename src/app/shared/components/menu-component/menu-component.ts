import { Component, inject, effect, signal, computed } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Navigation } from '@services/navigation';
import { ScreenSizeService } from '@services/screen-size-service';

interface MyLinks {
  path: string;
  label: string;
}

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.html',
  styleUrl: './menu-component.css',
  standalone: true,
  imports: [CommonModule, DrawerModule, ButtonModule],
})
export class MenuComponent {
  private readonly MOBILE_BREAKPOINT = 768;
  public readonly links: MyLinks[] = [
    { label: 'inicio', path: '' },
    { label: 'cv', path: 'cv' },
    { label: 'about', path: '#about' },
    { label: 'contact', path: '#contact' },
  ];
  public isOpen = signal<boolean>(false);

  private screenSize = inject(ScreenSizeService);
  private navigation = inject(Navigation);


  public currentPath = this.navigation.currentPath();
  private widthScreen = this.screenSize.width;
  public isMobile = computed(() => this.widthScreen() < this.MOBILE_BREAKPOINT);


  handleDrawer(): void {
    this.isOpen.update((curr) => !curr);
  }

  handleNavigate(path: string) {
    this.navigation.go(path);
  }
}
