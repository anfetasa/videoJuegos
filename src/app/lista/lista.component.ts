import { Component, OnInit } from '@angular/core';
import { JUEGOS } from '../juegos.model'
import { AuthService } from '../Services/auth.service';

@Component({ 
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  juegos : any = JUEGOS;
  dtOptions: DataTables.Settings = {};

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
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
