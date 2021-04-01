import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ClientService } from '../Services/client.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  datos;
  filterPost = '';

  constructor(public auth: AuthService, public view: ClientService) { }

  getInformacion(){
    this.view.getRequestAll(`${environment.BASE_API}/user/home`).subscribe(
      (data):any => this.datos = data,
      error => console.log("Error")
    )
  }

  ngOnInit(): void {

    this.getInformacion();

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      language: {
        url: "//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json"
      }
    };
    console.log(8787);
  }

}
