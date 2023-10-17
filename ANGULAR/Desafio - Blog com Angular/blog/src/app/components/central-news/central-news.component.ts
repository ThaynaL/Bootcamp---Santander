import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-central-news',
  templateUrl: './central-news.component.html',
  styleUrls: ['./central-news.component.css', './central-news.component.responsive.css']
})
export class CentralNewsComponent implements OnInit {
  @Input()
  fotoCard:string = "";
  @Input()
  tituloCard:string = "";
  @Input()
  descricaoCard:string = "";
  @Input()
  fotoDescr:string = "";
  @Input()
  id:string = "0";

  constructor() { }

  ngOnInit(): void {
  }
}
