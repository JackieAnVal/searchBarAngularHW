import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResjuegosComponent } from './resjuegos.component';

describe('ResjuegosComponent', () => {
  let component: ResjuegosComponent;
  let fixture: ComponentFixture<ResjuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResjuegosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResjuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
