import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesId2Component } from './courses-id2.component';

describe('CoursesId2Component', () => {
  let component: CoursesId2Component;
  let fixture: ComponentFixture<CoursesId2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesId2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesId2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
