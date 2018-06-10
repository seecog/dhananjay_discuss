import { Component } from '@angular/core';
import { shallowEqual } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
private a : string="10";//data member
private b : string="60";
private base : number = 2;
private pow : number = 4;
private lm : number =2;
private employees : any[]=[
{name : 'Mohan',age : 21,sal : 100},
{name : 'Sohan',age : 22,sal : 99},
{name : 'Rohan',age : 23,sal : 88}


]
add(){
var t1 = parseInt(this.a);
var t2 = parseInt(this.b);
alert("The sum is "+(t1+t2))
  }

// private p : number=91;
// private path : string ="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2000px-Angular_full_color_logo.svg.png"

// pankaj(){
// alert("Hello world")
// }

}
