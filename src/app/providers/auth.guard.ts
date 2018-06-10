import {Injectable} from '@angular/core';
import { CanActivate, Router } from '@angular/router';
@Injectable()

export class AuthGuard implements CanActivate{
constructor(private x : Router){}
canActivate(){
    if(localStorage.getItem('login_stt')=='1')
    {
        
       // this.x.navigate(['/home'])
        return false;
    }
    else{
        
        //this.x.navigate(['/login'])
        return true;
    }
    
}

}