import {Injectable} from '@angular/core';
import { CanActivateChild } from '@angular/router';
@Injectable()
export class ChildguardService implements CanActivateChild{
canActivateChild(){
    return false;
}
}