import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Paella } from './paella';
import { PAELLAS } from 'src/app/Componentes/paellasprueba';

@Injectable({ providedIn: 'root' })
export class HeroService {


  getHeroes(): Observable<Paella[]> {


    return of(PAELLAS);
  }

  getHero(id: number): Observable<Paella> {


    return of(PAELLAS.find(paella => paella.id === id));
  }
}