import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { ComprarComponent } from './comprar/comprar.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
// import { LoginAdminComponent } from './login-admin/login-admin.component';
import { CarritoComponent } from './carrito/carrito.component';
import { PublicarComponent } from './publicar/publicar.component';
import { AllGuard } from './guardias/all.guard';

const routes: Routes = [
  {path: '', component: ListaComponent},
  {path: 'comprar/:id', component: ComprarComponent, canActivate: [AllGuard]}, 
  {path: 'register', component: RegisterUserComponent},
  {path: 'login', component: LoginUserComponent},
  // {path: 'login-admin', component: LoginAdminComponent},
  {path: 'carrito', component: CarritoComponent, canActivate: [AllGuard]},
  {path: 'publicar', component: PublicarComponent, canActivate: [AllGuard]},    
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
