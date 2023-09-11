import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchedUserComponent } from './fetched-user.component';

describe('FetchedUserComponent', () => {
  let component: FetchedUserComponent;
  let fixture: ComponentFixture<FetchedUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FetchedUserComponent]
    });
    fixture = TestBed.createComponent(FetchedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
