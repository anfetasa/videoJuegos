import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap } from '@angular/router';
import { ClientService } from '../Services/client.service';
import { environment } from '../../environments/environment';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  datos;
 
  constructor(
    private router : ActivatedRoute, 
    private client: ClientService,
    private route: Router,
   ) { }

    agregarProducto(id:number){
      this.client.postRequest(`${environment.BASE_API}/user/carrito`, { 
        idJuego : id
      }, 
      localStorage.getItem("token")).subscribe( 
        (data:any) => {console.log("producto añadido al carrito")},
        Swal.fire({
          icon: 'success',
          title: 'Producto agregado correctamente',
          showConfirmButton: true,
          confirmButtonText: `Ok`
        }).then((result) => {
          //Read more about isConfirmed, isDenied below
          if (result.isConfirmed) {
            this.route.navigate( ['/'])
          } 
        })
      )
    }

    ngOnInit(): void {
  
    this.router.paramMap 
        .subscribe((params : ParamMap) => {
        let id = + params.get('id');
        this.getDatos(id);
        console.log(id);
      });
  
    }
   
    async getDatos(id:number){
      this.client.getRequestId(`${environment.BASE_API}/user/stock/` + id).subscribe(
        (data): any =>{
          this.datos = data
        },(error)=>{
          console.log("No se encuentra el id")
        }
      );
    }
  

}
