import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import {userData} from './userData'
import {observable,BehaviorSubject} from 'rxjs'
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser:any  =new BehaviorSubject(null);

baseUrl:string='https://ecommerce.routemisr.com/api/v1/auth/';

  constructor(private _HttpClient:HttpClient , private _Router:Router) {

    if(localStorage.getItem('userData')!=null){
      this.currentUser.next(JSON.parse(localStorage.getItem('userData')) );

    }
    else{

    }

  }
  
  logOut(){
    this.currentUser.next(null)
    localStorage.setItem('userData',null)
    this._Router.navigate(['./login'])

  }


    register(registerFormValue):Observable<any>
    {
      return this._HttpClient.post(`${this.baseUrl}signup`,registerFormValue)
    }
//https://routeegypt.herokuapp.com/signup
    login(loginFormValue):Observable<any>
    {
      return this._HttpClient.post(`${this.baseUrl}signin`,loginFormValue)
    }

    saveCurrentUser(name  , email, token){
      let user = new userData(name ,email, token);
      localStorage.setItem('userData',JSON.stringify(user))
      this.currentUser.next(user)
    }

  }

