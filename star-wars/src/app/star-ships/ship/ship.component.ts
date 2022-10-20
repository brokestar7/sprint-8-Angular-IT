import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { StarShipsService } from '../services/star-ships.service';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.css']
})
export class ShipComponent implements OnInit {

  urlImg: string = 'https://starwars-visualguide.com/assets/img/starships'

  constructor(private activateRoute : ActivatedRoute, private starshipService: StarShipsService) { }

  @Input() ship: any;

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.starshipService.getStarship(id)),
        tap(console.log)
      )
      .subscribe(starship => {
        this.ship = starship
      });
  }

}
