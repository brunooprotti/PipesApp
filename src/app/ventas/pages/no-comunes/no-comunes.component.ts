import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre:string='Bruno';
  genero:string='masculino';
  invitacionMap = {
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }

  //i18nPlural
  clientes:string[]=['maria', 'pedro', 'Justina', 'Genaro', 'Renata'];
  clientesMap = {
    '=0':'no tenemos ningun cliente esperando.', //Compara si es 0 el length del array
    '=1':'tenemos un cliente esperando.',
    'other':'tenemos # cliente esperando.'      //Cualquier otro valor se identifica con el #
  }
  cambiarCliente(){
    this.nombre = 'Justina';
    this.genero = 'femenino';
  }
  borrarCliente(){
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    nombre : 'Bruno',
    edad:22,
    direccion: 'Ottawa, Canada'
  }

  //Json Pipe
  heroes = [
    {
      nombre : 'Superman',
      vuela:true
    },
    {
      nombre : 'Robin',
      vuela:false
    },
    {
      nombre : 'Aquaman',
      vuela:false
    }
  ];


  //Async pipe
  miObservable = interval(1000);

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data de promesa' );
    }, 3500 );
  } );
}
