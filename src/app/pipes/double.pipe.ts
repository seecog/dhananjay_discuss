import {Pipe,PipeTransform} from '@angular/core';
@Pipe({name : "double"})
export class DoublePipe implements PipeTransform{
    transform(t1 : number){
return t1*2;
    }
}