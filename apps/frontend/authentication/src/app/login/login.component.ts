import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ZardCardComponent, ZardButtonComponent, ZardInputDirective } from '@workly/ui-theme';

@Component({
    selector: 'app-login',
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ZardCardComponent,
        ZardButtonComponent,
        ZardInputDirective
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export class LoginComponent {
    private fb = inject(FormBuilder);
    private router = inject(Router);
    
    loginForm: FormGroup;
    isLoading = signal(false);
    errorMessage = signal('');

    constructor() {
        this.loginForm = this.fb.group({
            username: ['', [Validators.required, Validators.minLength(3)]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    onSubmit() {
        if (this.loginForm.valid) {
            this.isLoading.set(true);
            this.errorMessage.set('');

            // Simulate login API call
            setTimeout(() => {
                const { username, password } = this.loginForm.value;

                // Simple validation for demo purposes
                if (username === 'admin' && password === 'password') {
                    // Successful login
                    this.router.navigate(['/dashboard']);
                } else {
                    this.errorMessage.set('Invalid username or password');
                }

                this.isLoading.set(false);
            }, 1000);
        } else {
            this.errorMessage.set('Please fill in all required fields');
        }
    }

    getFieldError(fieldName: string): string {
        const field = this.loginForm.get(fieldName);
        if (field?.errors && field.touched) {
            if (field.errors['required']) {
                return `${fieldName} is required`;
            }
            if (field.errors['minlength']) {
                return `${fieldName} must be at least ${field.errors['minlength'].requiredLength} characters`;
            }
        }
        return '';
    }
}


