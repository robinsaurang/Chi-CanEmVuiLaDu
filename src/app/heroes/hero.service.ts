import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; // Nhóm chung, Alpabet


import { ExceptionService, SpinnerService, ToastService } from '../../core';
import { Hero } from './hero.model'; // Nhóm chung, Alpabet

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
}
