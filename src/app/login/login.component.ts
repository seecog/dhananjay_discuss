import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
private em : string;
private pass : string;
  constructor(private x : Router) { }

  ngOnInit() {
  }

  check(){
if(this.em=='mohan@gmail.com' && this.pass=="123456"){
  console.log('Inside if')
  localStorage.setItem('login_stt','1')
  this.x.navigate(['/home'])
}
else{
  console.log('Inside else')
  localStorage.setItem('login_stt','0')
}
  }

}
