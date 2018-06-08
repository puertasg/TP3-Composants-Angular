import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Formation } from '../classes/Formation';

@Component({
  selector: 'app-onchange',
  templateUrl: './onchange.component.html',
  styleUrls: ['./onchange.component.css']
})
export class OnchangeComponent implements OnInit, OnChanges {

  @Input()
  formationBind: Formation;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(change: SimpleChanges) {
    const formationChange = change["formationBind"];

    if (formationChange.previousValue) {
      console.log(`Previous : ${formationChange.previousValue.nom}`);
    }

    console.log(`Current : ${formationChange.currentValue.nom}`);
  }
}
