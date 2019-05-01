import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFullComponent } from './event-full.component';

describe('EventFullComponent', () => {
  let component: EventFullComponent;
  let fixture: ComponentFixture<EventFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
