import { Component, OnInit } from '@angular/core';
import { Formation } from '../classes/Formation';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {
  formation1: Formation = new Formation("Formation 1", "La première formation", 123, new Date(), new Date());
  formation2: Formation = new Formation("Formation 2", "La deuxième formation", 456, new Date(), new Date());

  formations: Array<Formation> = [this.formation1, this.formation2];

  constructor() { }

  ngOnInit() {
  }
}