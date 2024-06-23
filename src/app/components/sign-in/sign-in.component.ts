import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RegisteredUser } from '../../Types/Types';
import { FormsModule } from '@angular/forms';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule,MatCardModule,MatButtonModule,MatFormFieldModule,MatIconModule,MatInputModule,RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  user:RegisteredUser={
    email:'',
    password:''
  }
  hidePassword: boolean = true;
  clickPasswordHideEvent(event: MouseEvent) {
    this.hidePassword = !this.hidePassword;
    event.stopPropagation();
  }
  onSubmit() {}
}
