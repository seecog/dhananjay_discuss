import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private x : ActivatedRoute,private y : Router) { }

  ngOnInit() {

this.x.params.subscribe(function(params){

  console.log("The id s ",params['id']);

  // this.y.navigate(['/users']);



})

  }

  move(){

this.y.navigate(['/users']);
  }

}
