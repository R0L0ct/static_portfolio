import { Component } from '@angular/core';
import { HlmSpinnerComponent } from '@spartan-ng/ui-spinner-helm';

@Component({
  selector: 'spartan-spinner',
  standalone: true,
  imports: [HlmSpinnerComponent],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css',
})
export class SpinnerPreviewComponent {}
