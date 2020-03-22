import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import User from 'src/app/models/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user: User;

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit() {
  }

  signIn(){
    this.authService.signIn(this.user)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/']);
      },
      err => {
        console.log(err);
      }
    )
  }

}
