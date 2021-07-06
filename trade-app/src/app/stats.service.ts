import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  data = {
    open: 79,
    high: 47,
    mkCap: 202,
    w52: 51 
  }

  constructor() { }

  getData(){
    return this.data;
  }
}
