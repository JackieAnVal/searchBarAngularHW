import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosconsolaComponent } from './juegosconsola.component';

describe('JuegosconsolaComponent', () => {
  let component: JuegosconsolaComponent;
  let fixture: ComponentFixture<JuegosconsolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegosconsolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegosconsolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
