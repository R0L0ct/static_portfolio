import { Component, Input, inject } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { ThemeService } from '../../../libs/theme/theme.service';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [HlmButtonDirective],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() buttonName = '';

  private _themeservice = inject(ThemeService);
  public toggleTheme(): void {
    this._themeservice.toggleDarkMode();
  }
}
