import { Injectable } from '@angular/core';
import stocksData from '../assets/stocks-data.json';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  //stocksData = require('src/assets/stock-data.json');

  constructor() { }

  getStocksData(){
    return stocksData;
  }
}
