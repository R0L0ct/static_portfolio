import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Writeup } from './cybersecurity.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CybersecurityService {
  writeups: Writeup[] = [];
  linkWriteup: string = '/assets/pdfs/Future.pdf';

  // Subject para notificar cambios en linkWriteup
  // Un BehaviorSubject es un tipo especial de observable que siempre emite un valor inicial, incluso si no hay suscriptores en ese momento.
  linkWriteupSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
    this.linkWriteup
  );

  // Método para actualizar el valor de linkWriteup y notificar a los suscriptores
  actualizarLinkWriteup(nuevoValor: string) {
    this.linkWriteupSubject.next(nuevoValor);
  }

  constructor(private http: HttpClient) {}
  getWriteups() {
    return this.http.get<Writeup[]>('/assets/db/machines.json');
  }
}
