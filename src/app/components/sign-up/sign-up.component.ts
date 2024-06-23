import { Component, inject, signal} from '@angular/core';
import {MatInputModule} from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule} from '@angular/forms';
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
import { PasswordPatternDirective } from '../../directives/password-pattern.directive';
import { MatchPasswordDirective } from '../../directives/match-password.directive';
import { Router, RouterLink} from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    FormsModule,
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
    MatchPasswordDirective,
    PasswordPatternDirective,
    RouterLink
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  authService=inject(AuthService)
  router=inject(Router)
  user:User={
    firstName:'',
    secondName:'',
    email:'',
    password:'',
    confirmPassword:'',
    gender:'',
    dateOfBirth:'',
  }
  acceptedTermsAndConditions:boolean=false
  marketingSource:string=''
  hidePassword=signal(true)
  clickPasswordHideEvent(event: MouseEvent) {
    this.hidePassword.update(previous=>!previous)
    event.stopPropagation();
  }
  onSubmit(){
    this.authService.register(this.user).subscribe(()=>{
      this.router.navigate(['/home'])
    })
  }
}
