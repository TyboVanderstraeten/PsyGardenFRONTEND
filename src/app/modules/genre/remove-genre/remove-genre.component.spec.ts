import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveGenreComponent } from './remove-genre.component';

describe('RemoveGenreComponent', () => {
  let component: RemoveGenreComponent;
  let fixture: ComponentFixture<RemoveGenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveGenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
