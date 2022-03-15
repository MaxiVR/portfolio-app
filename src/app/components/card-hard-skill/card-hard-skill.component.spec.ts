import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHardSkillComponent } from './card-hard-skill.component';

describe('CardHardSkillComponent', () => {
  let component: CardHardSkillComponent;
  let fixture: ComponentFixture<CardHardSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHardSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHardSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
