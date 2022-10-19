import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarShipsRoutingModule } from './star-ships-routing.module';
import { HomeComponent } from './home/home.component';
import { StarshipsComponent } from './starships/starships.component';


@NgModule({
  declarations: [
    HomeComponent,
    StarshipsComponent
  ],
  imports: [
    CommonModule,
    StarShipsRoutingModule
  ]
})
export class StarShipsModule { }
