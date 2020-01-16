import { Component, OnInit, ContentChild, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @ContentChild('input1',{static : false}) el : ElementRef;
  @ViewChild('input2',{static : false}) el1 : ElementRef;
  constructor() { 
    console.log("child constructor");
  }

  ngOnInit() {
    console.log("child ngOnInit");
  }

  onButtonClick(){
    console.log(this.el.nativeElement.value);
    console.log(this.el1.nativeElement.value);
  }

  ngAfterContentInit(){
    console.log("child ngAfterContentInit");
    console.log(this.el.nativeElement.value);
    //console.log(this.el1.nativeElement.value);

  }

  ngAfterViewInit (){
    console.log("child ngAfterViewInit");
    console.log(this.el.nativeElement.value);
    console.log(this.el1.nativeElement.value);
  }

}
