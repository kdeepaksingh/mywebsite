import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistrationDetailsComponent } from './user-registration-details.component';

describe('UserRegistrationDetailsComponent', () => {
  let component: UserRegistrationDetailsComponent;
  let fixture: ComponentFixture<UserRegistrationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegistrationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistrationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
