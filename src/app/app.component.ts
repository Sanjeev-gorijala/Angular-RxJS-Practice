import { Component, VERSION ,OnInit} from '@angular/core';
import {of,from }from 'rxjs';
import {map,tap,take} from 'rxjs/operators'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;

  ngOnInit(){

    of(3,4,5,6).subscribe(console.log);

    from([10,7,8,5])
    .pipe(
      tap(item=>console.log(`item before map is ${item}`)),
      map(item=>item*2),
      map(item=>item-10),
      map(item=>{
        if (item===0){
          throw new Error('Zero detected');
        }
        return item;
      }),
      take(3)
    )
    .subscribe(
      item =>console.log(`my item .. ${item}`),
      err =>console.error(`error is ${err}`),
      () =>console.log('complete')
    );


    of('sanju1','sanju2','sanju3').subscribe(
    sanju =>console.log(`Hi! This is .. ${sanju}`),
      err =>console.error(`sorry ,error is ${err}`),
      () =>console.log('Good Byee')
    );

    
  }
}
