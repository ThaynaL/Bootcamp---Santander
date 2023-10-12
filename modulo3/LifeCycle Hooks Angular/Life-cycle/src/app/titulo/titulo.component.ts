import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit, OnChanges {
  @Input() nome:string = '';

  constructor( ) { 
    console.log(`Constructor ${this.nome}`);
  }

  ngOnChanges(): void {
    console.log(`OnChanges ${this.nome}`);
  }

  ngOnInit(): void {
    this.nome = this.nome + "f";
    console.log(`OnInit ${this.nome}`);
  }

  


}
