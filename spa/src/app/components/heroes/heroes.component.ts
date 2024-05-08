import { Component } from '@angular/core';
import { Heroe, HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes:Heroe[] = [];
  constructor(private _heroesService: HeroesService,
    private router:Router
  ){
    
  }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(idx:number){
    console.log(idx);
    this.router.navigate(['/heroe', idx]);
  }
}
