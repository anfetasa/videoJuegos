import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ClientService } from '../Services/client.service';
import { environment } from '../../environments/environment';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  public datos:any;

  public findDatos:boolean = false;

  constructor(public auth: AuthService, public view: ClientService,  private route: Router) { }

  ngOnInit(): void {
    this.view.postRequest(`${environment.BASE_API}/user/carritoStock/2/1`, 
    {},
    localStorage.getItem('token')).subscribe(
      (data: any) => {
        try {
          if(data[0].id){
            this.findDatos = true;
            this.datos = data;
          }
        } catch (error) {
          this.findDatos = false;
        }
        
      }
    )
  }

  deleteProduct(id){

    Swal.fire({
      icon: 'question',
      title: '¿Quieres borrar este producto?',
      showDenyButton: true,
      denyButtonText: `Cancelar`,
      showConfirmButton: true,
      confirmButtonText: `Confirmar`
    }).then((result) => {
      //Read more about isConfirmed, isDenied below
      if (result.isConfirmed) {
      this.view.deleteRequestId(`${environment.BASE_API}/user/carritoStock/${id}/${localStorage.getItem("token")}`,
    ).subscribe(
      (data: any) => {
        try {
          if(data[0].id){
            this.findDatos = true;
            this.datos = data;
          }
        } catch (error) {
          this.findDatos = false;
        }
      }
    )
        this.route.navigate( ['/carrito'])
      }
    })

  }

  comprarProduct(){

    Swal.fire({
      icon: 'question',
      title: 'Desea comprar este producto?',
      showDenyButton: true,
      denyButtonText: `Cancelar compra`,
      showConfirmButton: true,
      confirmButtonText: `Aceptar`
    }).then((result) => {
      //Read more about isConfirmed, isDenied below
      if (result.isConfirmed) {
        this.view.postRequest(`${environment.BASE_API}/user/buyStock`, {juegos: this.datos}, localStorage.getItem("token")
      ).subscribe(
        (data: any) => {
          try {
            if(data[0].id){
              this.findDatos = true;
              this.datos = data;
            }
          } catch (error) {
            this.findDatos = false;
          }
        }
      )
        this.route.navigate( ['/historial'])
      }
    })

  }

}
