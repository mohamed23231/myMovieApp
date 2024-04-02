import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import{Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  flag:boolean=false;
  isLoading: boolean = false;

  constructor(private _AuthService:AuthService,private _Router:Router) {
    if(localStorage.getItem('userData')!=null){
      _Router.navigate['/home']

    }

   }


  getRegisterInfo(registerForm){
    this.isLoading=true;

    if(registerForm.valid == true){
      this._AuthService.register(registerForm.value).subscribe((data)=>{
        if(data.message=='success'){
          this.isLoading=true;
          this._Router.navigate(['/login'])
        }
        else
        {
          this.flag=true;
          this.isLoading=true;

        }
      })
    }
  }


  registerForm:FormGroup = new FormGroup({
    'name':new FormControl( null , [Validators.required , Validators.minLength(3) , Validators.maxLength(8) ]),
    'email':new FormControl(null,[Validators.email]),
    'password':new FormControl(null,[Validators.required ]),
    'rePassword':new FormControl(null,[Validators.required ]),
    'phone': new FormControl(null, [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ])

  },this.confirmPasswordMethod);
  confirmPasswordMethod(pw: any) {
    if (pw.get('password')?.value == pw.get('rePassword')?.value) {
      return null;
    } else {
      return { matchedPassword: true };
    }
  }


  ngOnInit(): void {
    
  }

}
