import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {  ClientService } from '../Services/client.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.component.html',
  styleUrls: ['./publicar.component.css']
})
export class PublicarComponent implements OnInit {

  form: FormGroup;
  load: boolean = true; 

  constructor(
    private fb: FormBuilder, 
    private route: Router,
    private client: ClientService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],
      categoria: ['', Validators.required],
      img: ['', Validators.required],
    });
  }

  async onSubmit() {
    
    
    if (this.form.valid) {
  
      this.load = false;
      this.client.postRequest(`${environment.BASE_API}/admin/topost`,{
        nombre: this.form.value.nombre,
        descripcion: this.form.value.descripcion,
        precio: this.form.value.precio,
        categoria: this.form.value.categoria,
        img: this.form.value.img,
      }).subscribe(

        (response: any) => {
          console.log(response);
          this.route.navigate( ['/']);


          Swal.fire({
            icon: 'success',
            title: 'Anuncio publicado correctamente',
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
        console.log("error al publicar", error.status);

      })
      

    } else {

      console.log("Form error");
    }


    
  }

}