import { Component, inject, signal,ChangeDetectionStrategy} from '@angular/core';
import {MatInputModule} from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule,FormGroup,FormControl,Validators} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker'
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio'
import {MatSelectModule} from '@angular/material/select'
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatDividerModule} from '@angular/material/divider'
import {MatCardModule} from '@angular/material/card'
import { User } from '../../Types/Types';
import { Router, RouterLink} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { confirmPasswordValidator } from './confirm-password.validator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormErrorSnackbarComponent } from '../form-error-snackbar/form-error-snackbar.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDividerModule,
    MatCardModule,
    RouterLink,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  StrongPasswordRegx: RegExp =
    /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;
  signupForm = new FormGroup(
    {
      firstName: new FormControl('', Validators.required),
      secondName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(this.StrongPasswordRegx),
      ]),
      confirmPassword: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', Validators.required),
      marketingSource: new FormControl('', Validators.required),
      acceptTerms: new FormControl('', Validators.required),
    },
    { validators: confirmPasswordValidator }
  );
  get firstName() {
    return this.signupForm.get('firstName');
  }
  get secondName() {
    return this.signupForm.get('secondName');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }
  get gender() {
    return this.signupForm.get('gender');
  }
  get dateOfBirth() {
    return this.signupForm.get('dateOfBirth');
  }
  get marketingSource() {
    return this.signupForm.get('marketingSource');
  }
  get acceptTerms() {
    return this.signupForm.get('acceptTerms');
  }
  _snackBar=inject(MatSnackBar)
  authService = inject(AuthService);
  router = inject(Router);
  hidePassword = signal(true);
  clickPasswordHideEvent(event: MouseEvent) {
    this.hidePassword.update((previous) => !previous);
    event.stopPropagation();
  }
  onSubmit() {
    this.authService.register(this.signupForm.value).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
  openErrorSnackBar(){
    this._snackBar.openFromComponent(FormErrorSnackbarComponent,{
      duration:5000
    })
  }
  onReactiveSubmit(){
    console.log(this.signupForm.value)
  }
}
