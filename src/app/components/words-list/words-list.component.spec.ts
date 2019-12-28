import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddWordComponent } from "./../add-word/add-word.component";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { WordsListComponent } from "./words-list.component";
import { NavComponent } from "../nav/nav.component";

describe("WordsListComponent", () => {
  let component: WordsListComponent;
  let fixture: ComponentFixture<WordsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WordsListComponent, NavComponent, AddWordComponent],
      imports: [FormsModule, HttpClientModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
