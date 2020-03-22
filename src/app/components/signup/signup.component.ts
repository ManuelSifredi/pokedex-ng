import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService, private router: Router) {
    
  }

  ngOnInit() {
  }

  signUp(){
    this.authService.signUp(this.user)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/']);
      },
      err => {
        console.log(err);
      }
    );
  }

}
