import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
    private parametros: ActivatedRoute,
    private navegador: Router
  ) {
    this.parametros.params.subscribe(
      res => console.log(res)
    );

    this.parametros.firstChild?.params.subscribe(
      res => console.log(res)
    );

    this.parametros.queryParams.subscribe(
      res => console.log(res)
    );
  }

  ngOnInit(): void {
    setInterval(() => {
      this.navegador.navigate(['/']);
    }, 5000);
  }
}
