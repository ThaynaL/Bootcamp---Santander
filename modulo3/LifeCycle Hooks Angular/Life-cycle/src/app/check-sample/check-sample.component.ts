import { 
  Component, 
  OnInit, 
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent 
implements OnInit, 
           DoCheck,
           AfterContentChecked,
           AfterContentInit,
           AfterViewChecked,
           AfterViewInit,
           OnDestroy
{
    qtd:number = 0;

  constructor() { }

  add(){
    this.qtd += 1;
  }

  decrementar(){
    this.qtd -= 1;
  }

  // checked -> content -> view
  //quanto o primeiro conteúdo é iniciado
  ngAfterContentInit(): void {
    console.log('OnAfterContentInit');
  }

  //depois da iniciação da view
  ngAfterViewInit(): void {
    console.log('OnAfterViewInit');
  }

  //após alguma alteração, verifica o conteúdo
  ngAfterContentChecked(): void {
    console.log('OnAfterContentChecked');
  }
 
   //após alguma alteração, verifica a view
  ngAfterViewChecked(): void {
    console.log('OnAfterViewChecked');
  }
  
  ngOnInit(): void {
    console.log('OnInit');
  }
  ngDoCheck(): void {
    console.log('DoCheck');
  }

  ngOnDestroy(): void{
    console.log('Até mais tarde, pessoal!');
  }
}
