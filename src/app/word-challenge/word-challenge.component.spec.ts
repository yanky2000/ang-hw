import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordChallengeComponent } from './word-challenge.component';

describe('WordChallengeComponent', () => {
  let component: WordChallengeComponent;
  let fixture: ComponentFixture<WordChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
