import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WordChallengeComponent } from "./word-challenge.component";
import { NavComponent } from "../nav/nav.component";

describe("WordChallengeComponent", () => {
  let component: WordChallengeComponent;
  let fixture: ComponentFixture<WordChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WordChallengeComponent, NavComponent], 
      imports: [FormsModule, HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
