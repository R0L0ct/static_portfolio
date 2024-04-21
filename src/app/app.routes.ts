import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CybersecurityComponent } from './cybersecurity/cybersecurity.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cybersecurity', component: CybersecurityComponent },
  { path: 'web-development', component: WebDevelopmentComponent },
];
