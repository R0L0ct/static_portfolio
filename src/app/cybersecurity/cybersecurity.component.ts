import { Component } from '@angular/core';
import { TableComponent } from '../ui/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { CybersecurityService } from './cybersecurity.service';
import { Writeup } from './cybersecurity.interface';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { SpinnerPreviewComponent } from '../ui/spinner/spinner.component';
@Component({
  selector: 'app-cybersecurity',
  standalone: true,
  imports: [TableComponent, HttpClientModule, SpinnerPreviewComponent],
  templateUrl: './cybersecurity.component.html',
  styleUrl: './cybersecurity.component.css',
})
export class CybersecurityComponent {
  writeups: Writeup[] = [];
  linkWriteup: string;
  isLoading: boolean = true;
  private linkWriteupSubscription: Subscription;

  constructor(
    private cybersecurityService: CybersecurityService,
    private sanitizer: DomSanitizer
  ) {
    this.linkWriteup = this.cybersecurityService.linkWriteup;
    this.linkWriteupSubscription = Subscription.EMPTY;
  }

  getSafeUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.linkWriteup);
  }

  ngOnInit() {
    // Suscribirse a los cambios en el servicio
    this.linkWriteupSubscription =
      this.cybersecurityService.linkWriteupSubject.subscribe(
        (newLinkWriteup) => {
          this.linkWriteup = newLinkWriteup;
        }
      );
    // newLinkWriteup captura el valor recién emitido por el linkWriteupSubject
    this.fetchWriteups();
  }

  ngOnDestroy() {
    // Cancelar la suscripción para evitar pérdidas de memoria
    this.linkWriteupSubscription.unsubscribe();
  }

  fetchWriteups() {
    this.cybersecurityService.getWriteups().subscribe((writeups) => {
      this.writeups = writeups;
      this.cybersecurityService.writeups = writeups;
      this.isLoading = false;
    });
  }
}
