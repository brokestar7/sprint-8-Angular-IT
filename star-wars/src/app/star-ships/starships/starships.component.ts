import { Component, OnInit } from '@angular/core';
import { StarShipsService } from '../services/star-ships.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  starships : any[] = []
  page : number = 1;

  getStarships() {
    this.starshipService.getAllStarships(this.page)
      .subscribe({
        next: (response: any) => {
          this.starships = response.results;
          console.log(this.starships)
        },
        error: (err) => {
          console.log(err)
        }
      })
  }


  constructor(private starshipService: StarShipsService) { }

  ngOnInit(): void {
    this.getStarships();
  }

}
