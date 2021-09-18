import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeningProfileComponent } from './listening-profile.component';

describe('ListeningProfileComponent', () => {
  let component: ListeningProfileComponent;
  let fixture: ComponentFixture<ListeningProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeningProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeningProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
