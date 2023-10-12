import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-atributo',
  templateUrl: './componente-atributo.component.html',
  styleUrls: ['./componente-atributo.component.css']
})
export class ComponenteAtributoComponent implements OnInit {
  estilo:string = 'enable';
  corFundo:string = 'rgb(197, 71, 71)';
  corFont:string = 'white';
  item:string = '';
  listar:string[] = []; 
  isEnableBlock:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  addLista(){
    this.listar.push(this.item);
  }

  trocar(){
    if (this.estilo === 'disable') {
      this.estilo = 'enable';
    }else{
      this.estilo = 'disable';
    }

  }

}
