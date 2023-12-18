import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = 'admin';
  password: string = 'admin';
  dialog: any;

  
  constructor(private authService: AuthService, private router: Router) {}


  onSubmit() {
    const isAuthenticated = this.authService.login(this.username, this.password);

    if (isAuthenticated) {
      console.log('Login successful');
      this.router.navigate(['/adicionar-alunos-page']);
      
    } else {
      console.log('Login failed');
      
    }
  }

 
}
