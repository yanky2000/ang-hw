import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordList } from './my-comp.component';

describe('MyCompComponent', () => {
  let component: WordList;
  let fixture: ComponentFixture<WordList>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordList ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
