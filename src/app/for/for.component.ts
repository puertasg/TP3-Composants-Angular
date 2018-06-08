import { Component, OnInit } from '@angular/core';
import { Formation } from '../classes/Formation';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {
  formation1: Formation = new Formation("Formation 1", "La première formation");
  formation2: Formation = new Formation("Formation 2", "La deuxième formation");

  formations: Array<Formation> = [this.formation1, this.formation2];

  constructor() { }

  ngOnInit() {
  }
}