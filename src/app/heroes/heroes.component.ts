import {Component, OnInit} from '@angular/core';
import {Hero} from '../Hero';
import {HeroService} from '../hero.service';
import {MessageService} from "../message.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add('HeroService: selected ' + hero.name);
  }

  constructor(private heroService: HeroService,private messageService: MessageService) {
  }

  /*getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }*/

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }


}
