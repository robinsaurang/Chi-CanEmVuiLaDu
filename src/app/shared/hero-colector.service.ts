import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroColectorService {
  hero: Hero;

  constructor() { }
}
