import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit() {
  }
  buscarConsolas(palabras: string) {
    console.log(palabras);
    this.router.navigate(['/resconsolas', palabras]);
  }
  buscarJuegos(palabras: string) {
    console.log(palabras);
    this.router.navigate(['/resjuegos', palabras]);
  }
}