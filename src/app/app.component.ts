import { Component, OnInit } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour-of-heroes';

  constructor(private router: ActivatedRoute){

  }

  ngOnInit(){
    this.router.queryParams.subscribe(params => {
      console.log(params);
      console.log("window.location="+window.location);
  })
  }
}
