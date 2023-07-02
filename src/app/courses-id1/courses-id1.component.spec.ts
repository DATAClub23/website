import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesId1Component } from './courses-id1.component';

describe('CoursesId1Component', () => {
  let component: CoursesId1Component;
  let fixture: ComponentFixture<CoursesId1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesId1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesId1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
