import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Storage } from '@ionic/storage';


import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentialsForm: FormGroup;
  loading: boolean;
  authenticationService: any;
  alertService: any;
  returnUrl: any;
  password: any;
  username: any;
  submitted: boolean;
  f: any;
  error: any;

  constructor(private formBuilder: FormBuilder, private authService: AuthService,
    public router: Router, public storage: Storage) { }

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }
  onSubmit(credForm: FormGroup) {
    this.submitted = true;

    // stop here if form is invalid
    if (credForm.invalid) {
      return;
    }
    this.loading = true;
    console.log(credForm.value);
    this.authService.login(credForm.value)
      .pipe(first())
      .subscribe(
        data => {

          this.router.navigate(['hello/home'])
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }

}
