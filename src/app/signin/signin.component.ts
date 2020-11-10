import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SigninService } from '../signin.service';
import { Router } from '@angular/router';
import { GlobalServices } from '../GlobalService.component';
import { LoaderService } from '../loader.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  route: any;
  showLoader: boolean;
  name: string;
  SignInForm: FormGroup;
  constructor(private fb: FormBuilder, private service: SigninService, private router: Router, private login: GlobalServices,
    private loaderService: LoaderService,public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.SignInForm = this.fb.group({
      UserName: ['', [Validators.required, Validators.minLength(3)]],
      Password: ['', [Validators.required, Validators.minLength(3)]],
    });
    this.toastr.setRootViewContainerRef(vcr); 
  }

  ngOnInit() {
    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;     
  });
  }
  signIn(): void {   
    this.loaderService.display(true); 
    let Signindata = this.SignInForm.value;
    this.name = Signindata.UserName;
    this.service.Sign(Signindata)
  //  .retry(3)
    .subscribe((resp) => {     
        this.SignInForm.reset(),
        this.loaderService.display(false);
        this.router.navigate(['/search']);   
        GlobalServices.setUserName(this.name);     
      },
  error=>{    
    this.loaderService.display(false);
  this.toastr.error('Please check Username & Password!', 'Sign in Failed',{toastLife: 2000})},
  () => console.log('Authentication Complete')
);
   
  }
  
  

}
