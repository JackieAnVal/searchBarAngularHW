import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoconsolaComponent } from './infoconsola.component';

describe('InfoconsolaComponent', () => {
  let component: InfoconsolaComponent;
  let fixture: ComponentFixture<InfoconsolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoconsolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoconsolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
