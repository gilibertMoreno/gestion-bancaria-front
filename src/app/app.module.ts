import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule } from './ng-zorro-antd.module';
import { GestionarBancosComponent } from './gestionar-bancos/gestionar-bancos.component';
import { GestionarPersonasComponent } from './gestionar-personas/gestionar-personas.component';
import { GestionarCuentasBancariasComponent } from './gestionar-cuentas-bancarias/gestionar-cuentas-bancarias.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    GestionarBancosComponent,
    GestionarPersonasComponent,
    GestionarCuentasBancariasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NgZorroAntdModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
