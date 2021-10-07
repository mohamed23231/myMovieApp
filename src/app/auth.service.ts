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
      return this._HttpClient.post('https://routeegypt.herokuapp.com/signup',registerFormValue)
    }

    login(loginFormValue):Observable<any>
    {
      return this._HttpClient.post('https://routeegypt.herokuapp.com/signin',loginFormValue)
    }

    saveCurrentUser(first_name , last_name , email, token){
      let user = new userData(first_name , last_name ,email, token);
      localStorage.setItem('userData',JSON.stringify(user))
      this.currentUser.next(user)
    }

  }

