import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCommunityComponent } from './navbar-community.component';

describe('NavbarCommunityComponent', () => {
  let component: NavbarCommunityComponent;
  let fixture: ComponentFixture<NavbarCommunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarCommunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
