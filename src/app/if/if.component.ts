import { Component, OnInit } from '@angular/core';
import { Formation } from '../classes/Formation';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.css']
})
export class IfComponent implements OnInit {
  formation: Formation = new Formation("Formation if", "description du if");
  isHidden: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  switchHidden() {
    this.isHidden = !this.isHidden;
  }
}
