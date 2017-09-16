import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthRolesComponent } from './auth-roles.component';

describe('AuthRolesComponent', () => {
  let component: AuthRolesComponent;
  let fixture: ComponentFixture<AuthRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
