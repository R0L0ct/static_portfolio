import { Component, inject } from '@angular/core';
import { HlmToggleDirective } from '@spartan-ng/ui-toggle-helm';
import { BrnToggleDirective } from '@spartan-ng/ui-toggle-brain';
import { ThemeService } from '../../../libs/theme/theme.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [HlmToggleDirective, BrnToggleDirective, AsyncPipe],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css',
})
export class ToggleComponent {
  private _themeservice = inject(ThemeService);
  public theme$ = this._themeservice.theme$;

  public toggleTheme(): void {
    this._themeservice.toggleDarkMode();
  }
}
