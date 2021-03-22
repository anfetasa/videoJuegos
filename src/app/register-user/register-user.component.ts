import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {  ClientService } from '../Services/client.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  form: FormGroup;
  load: boolean = true; 

  constructor(
    private fb: FormBuilder, 
    private route: Router,
    private client: ClientService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', Validators.email],
      contraseña: ['', Validators.required],
    });
  }

  async onSubmit() {
    
    
    if (this.form.valid) {
  
      this.load = false;
      this.client.postRequest(`${environment.BASE_API}/user/register`,{
        nombre: this.form.value.nombre,
        correo: this.form.value.correo,
        contraseña: this.form.value.contraseña
      }).subscribe(

        (response: any) => {
          console.log(response);
          this.route.navigate( ['/login']);


          Swal.fire({
            icon: 'question',
            title: 'Desea iniciar sesion?',
            showDenyButton: true,
            denyButtonText: `No, registrar otro usuario`,
            showConfirmButton: true,
            confirmButtonText: `SI, iniciar sesion`
          }).then((result) => {
            //Read more about isConfirmed, isDenied below
            if (result.isConfirmed) {
              this.route.navigate( ['/login'])
            }
          })
          
        
          
      },
      (error) => {
        //this.load = true;
        console.log("error del usuario", error.status);

      })
      

    } else {

      console.log("Form error");
    }


    
  }

}