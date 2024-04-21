import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Writeup } from './cybersecurity.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CybersecurityService {
  private baseUrl = 'http://localhost:3000/writeups/';
  writeups: Writeup[] = [];
  linkWriteup: string = '';

  // Subject para notificar cambios en linkWriteup
  // Un BehaviorSubject es un tipo especial de observable que siempre emite un valor inicial, incluso si no hay suscriptores en ese momento. En este caso, se inicializa con una cadena de texto vacía ('').
  linkWriteupSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  // Método para actualizar el valor de linkWriteup y notificar a los suscriptores
  actualizarLinkWriteup(nuevoValor: string) {
    this.linkWriteup = nuevoValor;
    this.linkWriteupSubject.next(nuevoValor);
  }

  constructor(private http: HttpClient) {}
  getWriteups() {
    return this.http.get<Writeup[]>(this.baseUrl);
  }
}
