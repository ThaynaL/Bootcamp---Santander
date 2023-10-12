import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  produtos:string[] = [];
  menuType:string = "";
  constructor() { 
    this.produtos = [
      "Mouse",
      "Teclado",
      "Fone Bleutooth",
      "Cabo tipo C"
    ]
  }

  ngOnInit(): void {
  }

  adicinar(): void {
    this.produtos.push("Cabo HDMI");
  }
  deletar(): void {
    this.produtos.pop();
  }
  removerClick(index: number): void {
    this.produtos.splice(index, 1);
  }
}
