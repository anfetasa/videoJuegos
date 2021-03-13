import { Component, OnInit } from '@angular/core';
import { ClientService } from '../Services/client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productsStock: any;
  constructor(private client: ClientService) { }
 
  ngOnInit(): void {
    this.client.getRequest('http://localhost:5000/api/v01/stock',localStorage.getItem('token')
).subscribe(
 
      (response: any) => {
        console.log(response);

   
    },

    (error) => {

      console.log(error);


    })

  }
}
