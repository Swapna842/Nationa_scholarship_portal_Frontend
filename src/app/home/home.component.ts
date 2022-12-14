import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { student } from '../student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  email = ''
  password = ''
  invalidLogin = false
  errorMessage = 'Invalid Credentials';
  successMessage: string |any;
  loginSuccess = false;

  constructor(private router:Router,private loginService:AuthenticationService) { }

  ngOnInit(): void {
  }
  form=new FormGroup({
    'email':new FormControl('',Validators.compose([Validators.email, Validators.required])),
    'password':new FormControl('',Validators.required),
  })
  student:student=new student();
  checkLogin() {
      this.student=this.form.value;
      console.log(this.form.value)
      console.log(this.student)
    let student={
      "email":this.email,
      "password":this.password
    }

    this.loginService.login(student).subscribe((response) => {
      console.log(response);
      if(response)
      {
        sessionStorage.setItem('email', this.email)
        this.invalidLogin = false;
        this.loginSuccess = true;
        this.router.navigate(['/studenthome']);
        this.successMessage = 'Login Successful.';
      }
      
    });
    this.invalidLogin = true;
    this.loginSuccess = false;
  }
}

