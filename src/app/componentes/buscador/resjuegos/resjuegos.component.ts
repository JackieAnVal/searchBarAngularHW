import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsolasService } from '../../../servicios/consolas.service';
@Component({
  selector: 'app-resjuegos',
  templateUrl: './resjuegos.component.html',
  styleUrls: ['./resjuegos.component.css']
})
export class ResjuegosComponent implements OnInit {
  juegos: any[] = [];
  palabrasBusqueda:string;
  idConsola: string;
  constructor(private activatedRoute: ActivatedRoute,
    private consolasService: ConsolasService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['palabrasBusqueda']);
      this.palabrasBusqueda = params['palabrasBusqueda'];
      this.juegos = this.consolasService.buscarJuegos(this.palabrasBusqueda);
      console.log(this.juegos);
    })
  }
}
