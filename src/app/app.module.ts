import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';

/* import { PrimeNgModule } from './prime-ng/prime-ng.module'; //Modulo personalizado */
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el locale de la app (para poner fechas en español)
import localES from '@angular/common/locales/es-AR';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localES);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-AR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
