import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-news',
  templateUrl: './small-news.component.html',
  styleUrls: ['./small-news.component.css', './small-news.responsive.component.css']
})
export class SmallNewsComponent implements OnInit {
  @Input()
  fotoCard:string = "";
  @Input()
  tituloCard:string = "";
  @Input()
  fotoDescr:string = "";
  @Input()
  id:string = "0";

  constructor() { }

  ngOnInit(): void {
  }

}
