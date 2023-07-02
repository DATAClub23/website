import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesId3Component } from './courses-id3.component';

describe('CoursesId3Component', () => {
  let component: CoursesId3Component;
  let fixture: ComponentFixture<CoursesId3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesId3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesId3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
