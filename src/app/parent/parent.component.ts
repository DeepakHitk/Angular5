import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() {
    console.log("parent constructor");
   }

  ngOnInit() {
    console.log("parent ngOnInit");
  }

  ngAfterContentInit(){
    console.log("parent ngAfterContentInit");
  }

  ngAfterViewInit (){
    console.log("parent ngAfterViewInit");
  }

}
