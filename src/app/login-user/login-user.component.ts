import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {  ClientService } from '../Services/client.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  form: FormGroup;
  load: boolean = true;

  constructor(
    private fb: FormBuilder, 
    private route: Router,
    private client: ClientService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      correo: ['', Validators.email],
      contraseña: ['', Validators.required],
    });
  }

  async onSubmit() {
    
    
    if (this.form.valid) {

      let data = {
        correo: this.form.value.correo,
        contraseña: this.form.value.contraseña,
      }
  
      this.load = false;
      this.client.postRequest(`${environment.BASE_API}/user/login`, data).subscribe(

        (response: any) => {
          this.load = true;


          Swal.fire({
            icon: 'succes',
            title: 'Has iniciado sesion correctamente',
            showConfirmButton: true,
            confirmButtonText: `Ok`
          }).then((result) => {
            //Read more about isConfirmed, isDenied below
            if (result.isConfirmed) {
              this.route.navigate( ['/'])
            } 
          })
          
        
          
      },
      (error) => {
        //this.load = true;
        console.log(error.status);

      })
      

    } else {

      console.log("Form error");
    }


    
  }

}