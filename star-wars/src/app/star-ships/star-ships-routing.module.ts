import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarshipsComponent } from './starships/starships.component';
import { HomeComponent } from './home/home.component';
import { ShipComponent } from './ship/ship.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'starships', component: StarshipsComponent },
      { path: 'home', component: HomeComponent },
      { path: 'ship/:id', component: ShipComponent},
      { path: '**', redirectTo: 'home' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarShipsRoutingModule { }
