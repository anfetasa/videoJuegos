import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ClientService } from '../Services/client.service';
import { environment } from '../../environments/environment';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  public datos:any;

  public findDatos:boolean = false;

  constructor(public auth: AuthService, public view: ClientService,  private route: Router) { }

  ngOnInit(): void {
    this.view.postRequest(`${environment.BASE_API}/user/registroCompra/2/1`, 
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

}
