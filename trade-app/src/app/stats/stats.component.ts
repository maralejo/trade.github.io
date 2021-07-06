import { Component, OnInit } from '@angular/core';
import { StatsService } from '../stats.service';

@Component({
  selector: 'stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  data;

  constructor(service: StatsService) { 
    this.data = service.getData();
  }

  ngOnInit(): void {
  }

}
