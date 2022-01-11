import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExpComponent } from './card-exp.component';

describe('CardExpComponent', () => {
  let component: CardExpComponent;
  let fixture: ComponentFixture<CardExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
