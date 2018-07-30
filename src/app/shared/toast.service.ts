import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  // message: string;
  //
  // private _toastCount: number;
  //
  // hide() {
  //   this._toastCount--;
  //   this._log();
  // }
  //
  // show() {
  //   this._toastCount++;
  //   this._log();
  // }

  message: string;

  private toastCount: number;

  hide() {
    this.toastCount--;
    this.log();
  }

  show() {
    this.toastCount++;
    this.log();
  }
  private log() {
    console.log(this.message);
  }

  constructor() { }
}
