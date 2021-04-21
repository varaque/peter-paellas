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
