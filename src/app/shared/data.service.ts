import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
    export const mockHeroes   = ['Sam', 'Jill']; // prefer
    export const heroesUrl    = 'api/heroes';    // prefer
    export const VILLAINS_URL = 'api/villains';  // tolerate
  }
}
