import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap } from '@angular/router';
import { JUEGOS } from '../juegos.model';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  infojuego : any;

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
    .subscribe ((params : ParamMap) => {
      let id = + params.get('id');
      console.log(id);
      this.infojuego = JUEGOS.find(item => item.id === id);
    });
  }

}
