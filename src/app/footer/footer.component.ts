import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapLinkedin } from '@ng-icons/bootstrap-icons';
import { lucideMail } from '@ng-icons/lucide';
import { bootstrapGit } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  viewProviders: [
    provideIcons({ bootstrapLinkedin, lucideMail, bootstrapGit }),
  ],
})
export class FooterComponent {
  openLink(link: string) {
    window.open(link, '_blank');
  }
}
