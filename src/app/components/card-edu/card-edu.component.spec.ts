import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEduComponent } from './card-edu.component';

describe('CardEduComponent', () => {
  let component: CardEduComponent;
  let fixture: ComponentFixture<CardEduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
