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

  constructor(private _AuthService:AuthService,private _Router:Router) {
    if(localStorage.getItem('userData')!=null){
      _Router.navigate['/home']

    }

   }


  getRegisterInfo(registerForm){
    if(registerForm.valid == true){
      this._AuthService.register(registerForm.value).subscribe((data)=>{
        if(data.message=='success'){
          this._Router.navigate(['/login'])
        }
        else
        {
          this.flag=true;
        }
      })
    }
  }


  registerForm:FormGroup = new FormGroup({
    'first_name':new FormControl( null , [Validators.required , Validators.minLength(3) , Validators.maxLength(8) ]),
    'last_name':new FormControl(null , [Validators.required]),
    'email':new FormControl(null,[Validators.email]),
    'password':new FormControl(null,[Validators.required ])

  });


  ngOnInit(): void {
    
  }

}
