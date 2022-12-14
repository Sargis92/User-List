import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  private appLoading = new Subject<boolean>();
  public appLoading$ = this.appLoading.asObservable();

  constructor() { }

  setLoading(loading: boolean) {
    this.appLoading.next(loading);
  }
}
