import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap } from '@angular/router';
import { ClientService } from '../Services/client.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  datos;

  constructor(
    private route : ActivatedRoute, 
    private client: ClientService) { }

    ngOnInit(): void {
  
    this.route.paramMap
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
