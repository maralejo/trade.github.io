import { Component, OnInit } from '@angular/core';
import { StocksService } from '../stocks.service';

@Component({
  selector: 'stocks-grid',
  templateUrl: './stocks-grid.component.html',
  styleUrls: ['./stocks-grid.component.scss']
})
export class StocksGridComponent implements OnInit {

  data;

  constructor(service: StocksService) { 
    this.data = service.getStocksData();
    console.log(this.data);
  }

  ngOnInit(): void {
  }

}
