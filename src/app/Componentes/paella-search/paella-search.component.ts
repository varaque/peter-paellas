import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { PAELLAS } from '../paellasprueba';
import { Paella } from '../paella/paella'

@Component({
  selector: 'app-paella-search',
  templateUrl: './paella-search.component.html',
  styleUrls: ['./paella-search.component.css']
})
export class PaellaSearchComponent implements OnInit {

  constructor() { }

 /* search(term: string): void {
    this.searchTerms.next(term);
  }*/

  ngOnInit(): void {
    /*this.paellas = this.searchTerms.pipe(
    switchMap((term: string) => this.paellasprueba.searchPaellas(term)),);*/
  }

}
