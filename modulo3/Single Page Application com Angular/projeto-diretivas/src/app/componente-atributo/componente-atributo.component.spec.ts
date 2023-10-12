import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteAtributoComponent } from './componente-atributo.component';

describe('ComponenteAtributoComponent', () => {
  let component: ComponenteAtributoComponent;
  let fixture: ComponentFixture<ComponenteAtributoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteAtributoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteAtributoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
