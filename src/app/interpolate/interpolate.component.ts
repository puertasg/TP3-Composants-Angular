import { Component, OnInit } from '@angular/core';
import { Formation } from '../classes/Formation';

@Component({
  selector: 'app-interpolate',
  templateUrl: './interpolate.component.html',
  styleUrls: ['./interpolate.component.css']
})
export class InterpolateComponent implements OnInit {

  prenom: String = "Gauthier";
  nom: String = "Puertas";
  formation: Formation = new Formation();
  formationJS: Formation;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.formationJS = new Formation();
    }, 3000)
  }

  getFullName() {
    return `${this.prenom} ${this.nom}`;
  }

}
