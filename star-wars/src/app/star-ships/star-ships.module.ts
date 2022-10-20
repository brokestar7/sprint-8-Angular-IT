import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarShipsRoutingModule } from './star-ships-routing.module';
import { HomeComponent } from './home/home.component';
import { StarshipsComponent } from './starships/starships.component';
import { ShipComponent } from './ship/ship.component';
import { IdPipe } from './pipe/id.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    StarshipsComponent,
    ShipComponent,
    IdPipe
  ],
  imports: [
    CommonModule,
    StarShipsRoutingModule
  ]
})
export class StarShipsModule { }
