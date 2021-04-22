import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Paella } from '../../Interfaces/paella';

@Component({
  selector: 'app-paella-search',
  templateUrl: './paella-search.component.html',
  styleUrls: ['./paella-search.component.css']
})
export class PaellaSearchComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {}

}





//ESTE COMPONENTE NO HACE NADA, IBA A SER EL BUSCADOR DE MAIN BODY PERO AL FINAL SE HIZO DIRECTAMENTE AHI, ASI QUE PARA BORRAR, IGUAL QUE LOGUSER