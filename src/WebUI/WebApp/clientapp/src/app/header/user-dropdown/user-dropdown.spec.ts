import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDropdownComponent } from './user-dropdown';

describe('UserDropdownComponent', () => {
  let component: UserDropdownComponent;
  let fixture: ComponentFixture<UserDropdownComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UserDropdownComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
