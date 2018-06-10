import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'amitabh' })

export class PowerPipe implements PipeTransform {

    transform(t1, t2) {
        let p = 1;
        for (let i = 1; i <= t2; i++) {
            p = p * t1;
        }
        console.log('The value s ',p)
        return p;
    }

}