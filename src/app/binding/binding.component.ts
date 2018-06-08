import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  color: string = "red";
  isHidden: boolean = true;
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      if (this.color == "red") {
        this.color = "green"
      }
      else {
        this.color = "red"
      }
    }, 1000)
  }

  clickHandler() {
    this.isHidden = !this.isHidden;
  }

  mouseoverHandler(){
    console.log("mouseover");
  }

  mouseoutHandler(){
    console.log("mouseout");
  }
}
