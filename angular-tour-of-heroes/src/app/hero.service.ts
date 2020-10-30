import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class HeroService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /* getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  } */

  getHeroes(): Observable<Hero[]> {                                     // an array of them
    return  this.http.get<Hero[]>('http://localhost:3000/heroes');  
    //return  this.http.get<Hero[]>(' https://kurtmongoserver.azurewebsites.net/heroes/');
  }
  getHero(id: number): Observable<Hero> {                        // one of them
    return this.http.get<Hero>('http://localhost:3000/heroes/' + id);
    //return this.http.get<Hero>('https://kurtmongoserver.azurewebsites.heroes/' + id);
  }
}