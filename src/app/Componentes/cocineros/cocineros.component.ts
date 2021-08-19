import { Component, OnInit } from '@angular/core';
import { Cocinero } from 'src/app/models/cocinero.model';
import { CocineroService } from 'src/app/services/cocinero.service';

@Component({
  selector: 'app-cocineros',
  templateUrl: './cocineros.component.html',
  styleUrls: ['./cocineros.component.css']
})

export class CocinerosComponent implements OnInit {
  constructor(private cocineroService: CocineroService) { }
  cocineros: Cocinero[];

  async ngOnInit() {
    this.cocineros = await this.cocineroService.listar().toPromise();
  }

}
