import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnPencilComponent } from './btn-pencil.component';

describe('BtnPencilComponent', () => {
  let component: BtnPencilComponent;
  let fixture: ComponentFixture<BtnPencilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnPencilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnPencilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
