import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResconsolasComponent } from './resconsolas.component';

describe('ResconsolasComponent', () => {
  let component: ResconsolasComponent;
  let fixture: ComponentFixture<ResconsolasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResconsolasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResconsolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
