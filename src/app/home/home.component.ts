import { Component, OnInit } from '@angular/core';
import{MoviesService} from '../movies.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imgPrefix :string= 'https://image.tmdb.org/t/p/w500'
  trendingMovies:any[];
  trendingTv:any[];

  constructor(private _MoviesService:MoviesService) { 

    _MoviesService.getTrending('movies').subscribe((data)=>{

      this.trendingMovies=data.results
    })


    _MoviesService.getTrending('tv').subscribe((data)=>{

      this.trendingTv=data.results
      
    })
    

  }
  ngOnInit(): void {
  }

}
