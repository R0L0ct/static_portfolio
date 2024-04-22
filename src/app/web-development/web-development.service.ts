import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Website } from './web-development.interface';

@Injectable({
  providedIn: 'root',
})
export class WebsiteService {
  //   websites: Website[] = [];

  constructor(private http: HttpClient) {}
  getWebsites() {
    return this.http.get<Website[]>('/assets/db/websites.json');
  }
}
