import { Component, OnInit } from '@angular/core';
import { Formation } from '../classes/Formation';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {
  formation1: Formation = new Formation();
  formation2: Formation = new Formation();

  formations: Array<Formation> = [this.formation1, this.formation2];

  constructor() { }

  ngOnInit() {
  }

  colorElement(first: boolean, last: boolean): string {
    if (first) {
      return "red";
    }
    else if (last) {
      return "green";
    }
    else {
      return "black";
    }
  }

  colorBackgroundElement(odd: boolean): string {
    if (odd) {
      return "gray"
    }
    else {
      return "";
    }
  }
}