import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComprarComponent } from './comprar/comprar.component';
import { ListaComponent } from './lista/lista.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { CarritoComponent } from './carrito/carrito.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PublicarComponent } from './publicar/publicar.component';

@NgModule({
  declarations: [
    AppComponent,
    ComprarComponent,
    ListaComponent,
    RegisterUserComponent,
    LoginUserComponent,
    CarritoComponent,
    NavbarComponent,
    PublicarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
