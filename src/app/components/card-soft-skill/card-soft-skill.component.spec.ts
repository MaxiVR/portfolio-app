import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSoftSkillComponent } from './card-soft-skill.component';

describe('CardSoftSkillComponent', () => {
  let component: CardSoftSkillComponent;
  let fixture: ComponentFixture<CardSoftSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSoftSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSoftSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
