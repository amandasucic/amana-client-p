import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Storage } from '@ionic/storage';


import { AuthService } from 'src/app/services/auth.service';
import { AlertController } from '@ionic/angular';





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
  User: any;
  alert:any;
  constructor(private formBuilder: FormBuilder, private authService: AuthService,
    public router: Router, public storage: Storage, public alertCtrl: AlertController) { }

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }
  onSubmit(credForm: FormGroup) {
    this.submitted = true;

    
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
          console.log('Loginhd');
          this.presentPrompt();
        });
  }
 async presentPrompt() {
    const alert = await this.alertCtrl.create({
    header: 'Login failed',
      buttons: [
        {
          text: 'OK',
          role: 'OK',
          handler: data => {
            console.log('OK');
          }
        },
        
      ]
    });
    await alert.present();
  }

}
