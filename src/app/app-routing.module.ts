import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  {path:'',redirectTo:'register' , pathMatch:'full'},
  {path:'home', canActivate:[AuthGuard], component:HomeComponent},
  {path:'movies', canActivate:[AuthGuard], component:MoviesComponent},
  {path:'abour', canActivate:[AuthGuard], component:AboutComponent},
  {path:'tv',  canActivate:[AuthGuard],component:TvComponent},
  {path:'movieDetails/:type/:id', canActivate:[AuthGuard], component:MoviesDetailsComponent},
  {path:'register', component:RegisterComponent},
  {path:'people', canActivate:[AuthGuard], component:PeopleComponent},
  {path:'login', component:LoginComponent},
  {path:'**', component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
