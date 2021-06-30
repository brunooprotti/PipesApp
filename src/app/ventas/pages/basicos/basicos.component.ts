import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower:string='bruno protti';
  nombreUpper:string='BRUNO PROTTI';
  nombreCompleto:string='brUNo proTTI';

  fecha: Date = new Date(); //el dia de hoy

}
