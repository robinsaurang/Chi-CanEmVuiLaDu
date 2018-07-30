import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: Http) { }

  getHeroes() {
    return this.http.get('api/heroes').pipe(
      map((response: Response) => <Hero[]>response.json()));
  }
}
