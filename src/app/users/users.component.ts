import { Component, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private emps : any[]=[];
  constructor(private http : Http) { }

  ngOnInit() {
    this.http.get("https://employee-7744d.firebaseio.com/employee.json").subscribe(
      (res : Response)=>{
      let obj = res.json();
      
      this.emps = Object.keys(obj).map(function(key){
      return {id : key,data : obj[key]}
      })
      },
      (error)=>{
          console.log('The error is ',error)
        }
      
      
          )
  }

}
