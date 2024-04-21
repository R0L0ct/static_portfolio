import { Component } from '@angular/core';
import { ButtonComponent } from '../ui/button/button.component';
import { ToggleComponent } from '../ui/toggle/toggle.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, ToggleComponent, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
