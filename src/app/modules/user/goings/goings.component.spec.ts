import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoingsComponent } from './goings.component';

describe('GoingsComponent', () => {
  let component: GoingsComponent;
  let fixture: ComponentFixture<GoingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
