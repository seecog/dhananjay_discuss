import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'limit' })

export class LimitPipe implements PipeTransform {

    transform(t1, t2) {
        let newArr = [];
        for (let i = 0; i < t2; i++) {
            newArr.push(t1[i])
        }
        return newArr;
    }

}