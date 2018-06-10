import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';
import { RectangleService } from '../rectangle.service';
@Component({
  selector: 'app-testservice',
  templateUrl: './testservice.component.html',
  styleUrls: ['./testservice.component.css']
})
export class TestserviceComponent implements OnInit {

  constructor(private x : CalculatorService,private y : RectangleService) { }

  ngOnInit() {
    // var ans = this.x.add(10,20);
    // console.log('The sum is ',ans)
var ar = this.y.area(10,15);
console.log('ARea is ',ar)
var p = this.y.perimeter(10,15);
console.log("The permeter is ",p)
  }

}
