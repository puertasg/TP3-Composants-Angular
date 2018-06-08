import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Output()
  //Va permettre d'envoyer des events formationSelected au composant parent
  formationSelected: EventEmitter<Formation> = new EventEmitter<Formation>();

  selectFormation() {
    //Envoi d'un event formationSelected
    this.formationSelected.emit(this.formation);
  }

  ngOnInit() {
  }

}
