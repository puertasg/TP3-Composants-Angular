import { Component, OnInit, Input } from '@angular/core';
import { Formation } from '../classes/Formation';

@Component({
  selector: 'app-formation-item',
  templateUrl: './formation-item.component.html',
  styleUrls: ['./formation-item.component.css']
})
export class FormationItemComponent implements OnInit {

  @Input()
  formation: Formation;

  @Input()
  index: number;

  @Input()
  first: boolean;

  @Input()
  last: boolean;

  @Input()
  odd: boolean;
  constructor() { }

  ngOnInit() {
  }

}
