import { Component } from '@angular/core';
import { ButtonComponent } from '../ui/button/button.component';
import { ToggleComponent } from '../ui/toggle/toggle.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapTerminal } from '@ng-icons/bootstrap-icons';
import { lucideMenu } from '@ng-icons/lucide';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ButtonComponent,
    ToggleComponent,
    RouterLink,
    RouterLinkActive,
    NgIconComponent,
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  viewProviders: [provideIcons({ bootstrapTerminal, lucideMenu })],
})
export class HeaderComponent {
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }
  closeMenu() {
    this.isMenuOpen = false;
    document.body.classList.remove('modal-open');
  }
}
