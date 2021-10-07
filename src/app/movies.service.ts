import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {observable,BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }


  getTrending(mediaType):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=1a77d67b3b1f844fedba9955c92df66c`)
  }
  getItemDetails(mediaType,id):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=1a77d67b3b1f844fedba9955c92df66c&language=en-US`)
  }

}
