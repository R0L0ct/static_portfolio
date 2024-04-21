import { Component, Input, Output, SimpleChanges } from '@angular/core';
import {
  HlmCaptionComponent,
  HlmTableComponent,
  HlmTdComponent,
  HlmThComponent,
  HlmTrowComponent,
} from '@spartan-ng/ui-table-helm';
import { Writeup } from '../../cybersecurity/cybersecurity.interface';
import { CybersecurityService } from '../../cybersecurity/cybersecurity.service';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    HlmCaptionComponent,
    HlmTableComponent,
    HlmTdComponent,
    HlmThComponent,
    HlmTrowComponent,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  constructor(private writeupService: CybersecurityService) {}

  linkwriteup(link: string) {
    // this.writeupService.linkWriteup = link;
    this.writeupService.actualizarLinkWriteup(link);
  }

  protected machines: {
    machine: string;
    platform: string;
    difficulty: string;
    link: string;
  }[] = [];

  ngOnInit() {
    this.machines = this.writeupService.writeups.map((data) => ({
      machine: data.machineName,
      platform: data.platform,
      difficulty: data.difficulty,
      link: data.link,
    }));
  }
}
