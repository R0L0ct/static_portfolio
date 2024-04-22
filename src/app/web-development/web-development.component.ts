import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { WebsiteService } from './web-development.service';
import { Website } from './web-development.interface';

@Component({
  selector: 'app-web-development',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './web-development.component.html',
  styleUrl: './web-development.component.css',
})
export class WebDevelopmentComponent {
  websites: Website[] = [];
  constructor(private websiteService: WebsiteService) {}

  ngOnInit() {
    this.fetchWebsites();
  }
  openLink(link: string) {
    window.open(link, '_blank');
  }
  fetchWebsites() {
    this.websiteService.getWebsites().subscribe((websites) => {
      this.websites = websites;
    });
  }
}
