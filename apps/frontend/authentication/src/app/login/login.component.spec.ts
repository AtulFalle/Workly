import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockRouter: jest.Mocked<Router>;

  beforeEach(async () => {
    const routerSpy = {
      navigate: jest.fn()
    };

    await TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [
        { provide: Router, useValue: routerSpy }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    mockRouter = TestBed.inject(Router) as jest.Mocked<Router>;
    // Don't call detectChanges() to avoid template rendering issues
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty form', () => {
    expect(component.loginForm.get('username')?.value).toBe('');
    expect(component.loginForm.get('password')?.value).toBe('');
  });

  it('should validate required fields', () => {
    component.loginForm.patchValue({ username: '', password: '' });
    expect(component.loginForm.valid).toBeFalsy();
    expect(component.loginForm.get('username')?.errors?.['required']).toBeTruthy();
    expect(component.loginForm.get('password')?.errors?.['required']).toBeTruthy();
  });

  it('should validate minimum length', () => {
    component.loginForm.patchValue({ username: 'ab', password: '12345' });
    expect(component.loginForm.get('username')?.errors?.['minlength']).toBeTruthy();
    expect(component.loginForm.get('password')?.errors?.['minlength']).toBeTruthy();
  });

  it('should accept valid credentials', () => {
    component.loginForm.patchValue({ username: 'admin', password: 'password' });
    expect(component.loginForm.valid).toBeTruthy();
  });

  it('should show error for invalid credentials', (done) => {
    component.loginForm.patchValue({ username: 'invalid', password: 'wrongpassword' }); // Use valid length
    component.loginForm.markAsTouched(); // Mark form as touched to pass validation
    component.onSubmit();
    
    setTimeout(() => {
      expect(component.errorMessage()).toBe('Invalid username or password');
      done();
    }, 1100);
  });

  it('should navigate on successful login', (done) => {
    component.loginForm.patchValue({ username: 'admin', password: 'password' });
    component.onSubmit();
    
    setTimeout(() => {
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/dashboard']);
      done();
    }, 1100);
  });
});
