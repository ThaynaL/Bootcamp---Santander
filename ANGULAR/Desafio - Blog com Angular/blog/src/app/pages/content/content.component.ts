import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css', './content.component.responsive.css']
})
export class ContentComponent implements OnInit {
  @Input() fotoContent: string = "";
  @Input() tituloContent: string = "";
  @Input() descricaoContent: string = "";
  @Input() descFoto: string = "";
  private id: string | null = "0";

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      this.id = value.get("id");
      this.setValuesToComponent(this.id);
    });
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.find(article => article.id.toString() === id);
    if (result) {
      this.tituloContent = result.title;
      this.descricaoContent = result.description;
      this.fotoContent = result.photo;
      this.descFoto = result.descPhoto;
    }
  }
}
