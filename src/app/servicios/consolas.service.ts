import { Injectable } from '@angular/core';

@Injectable()
export class ConsolasService {

  private consolas:Consola[] = [
    {
      nombre: "PC Master Race",
      descripcion: "Juegos para PC",
      caracteristicas: "Texto y listado de las características de la consola PC Master Race...",
      imagen: "assets/pcmr.jpg",
      juegos: [
        {
          imagen: "assets/tlou.jpg",
          nombre: "Juego PC 1",
          developer: "Naughty Dog",
          lanzamiento: "2013"
        },
        {
          imagen: "assets/p5.jpg",
          nombre: "Juego PC 2",
          developer: "P-Studio",
          lanzamiento: "2017"
        },
        {
          imagen: "assets/hzd.jpg",
          nombre: "Juego PC 3",
          developer: "Guerrilla Games",
          lanzamiento: "2017"
        }
      ]
    },
    {
      nombre: "Playstation 4",
      descripcion: "Juegos para PS4",
      caracteristicas: "Texto y listado de las características de la consola Playstation 4...",
      imagen: "assets/ps4.jpg",
      juegos: [
        {
          imagen: "assets/p5.jpg",
          nombre: "Persona 5",
          developer: "P-Studio",
          lanzamiento: "2017"
        },
        {
          imagen: "assets/tlou.jpg",
          nombre: "The Last of Us",
          developer: "Naughty Dog",
          lanzamiento: "2013"
        },
        {
          imagen: "assets/hzd.jpg",
          nombre: "Horizon: Zero Dawn",
          developer: "Guerrilla Games",
          lanzamiento: "2017"
        }
      ]
    },
    {
      nombre: "Xbox One",
      descripcion: "Juegos para Xbox One",
      caracteristicas: "Texto y listado de las características de la consola Xbox One...",
      imagen: "assets/xboxone.jpg",
      juegos: [
        {
          imagen: "assets/tlou.jpg",
          nombre: "Juego Xbox 1",
          developer: "Naughty Dog",
          lanzamiento: "2013"
        },
        {
          imagen: "assets/p5.jpg",
          nombre: "Juego Xbox 2",
          developer: "P-Studio",
          lanzamiento: "2017"
        },
        {
          imagen: "assets/hzd.jpg",
          nombre: "Juego Xbox 3",
          developer: "Guerrilla Games",
          lanzamiento: "2017"
        }
      ]
    },
    {
      nombre: "Nintendo Switch",
      descripcion: "Juegos para Nintendo Switch",
      caracteristicas: "Texto y listado de las características de la consola Nintendo Switch...",
      imagen: "assets/nswitch.jpg",
      juegos: [
        {
          imagen: "assets/tlou.jpg",
          nombre: "Juego Switch 1",
          developer: "Naughty Dog",
          lanzamiento: "2013"
        },
        {
          imagen: "assets/p5.jpg",
          nombre: "Juego Switch 2",
          developer: "P-Studio",
          lanzamiento: "2017"
        },
        {
          imagen: "assets/hzd.jpg",
          nombre: "Juego Switch 3",
          developer: "Guerrilla Games",
          lanzamiento: "2017"
        }
      ]
    }
  ];

  constructor() {
    console.log("ConsolasService Creado...");
  }

  obtieneConsolas():Consola[]{
    return this.consolas;
  }

  obtieneConsola(id:string){
    return this.consolas[id];
  }

  obtieneJuegosConsola(idConsola:string){
    return this.consolas[idConsola].juegos;
  }

  obtieneJuego(idConsola:string, idJuego:string){
    console.log(typeof(this.consolas[idConsola].juegos[idJuego]))
    return this.consolas[idConsola].juegos[idJuego];
  }

  
  obtieneJuegoBusqueda(nombre:string){
    let juegos:object;
    nombre = nombre.toLowerCase();
    for (let consola of this.consolas) {
      for(let juego of consola.juegos){
        let nombreJuego = juego.nombre.toLowerCase();
        if (nombreJuego==nombre) {
          juegos=juego;
        }
      }
    }
    return juegos;
  }

  buscarConsolas(palabras: string): Consola[] {
    let resultadoConsolas: Consola[] = [];
    palabras = palabras.toLowerCase();
    for (let consola of this.consolas) {
      let nombreConsola = consola.nombre.toLowerCase();
      if (nombreConsola.indexOf(palabras) >= 0) {
        resultadoConsolas.push(consola);
      }
    }
    return resultadoConsolas;
  }

  buscarJuegos(palabras: string): any[] {
    let resultadoJuegos:any[] = [];
    palabras = palabras.toLowerCase();
    for (let consola of this.consolas) {
      for(let juego of consola.juegos){
        let nombreJuego = juego.nombre.toLowerCase();
        if (nombreJuego.indexOf(palabras) >= 0) {
          resultadoJuegos.push(juego);
        }
      }
    }
    return resultadoJuegos;
  }
}

export interface Consola{
  nombre:string;
  descripcion:string;
  caracteristicas:string;
  imagen:string;
  juegos:any;
}
