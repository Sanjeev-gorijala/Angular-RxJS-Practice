import { Component, VERSION ,OnInit} from '@angular/core';
import {of,from }from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;

  ngOnInit(){

    of(3,4,5,6).subscribe(console.log);

    from([10,7,8,9]).subscribe(
      item =>console.log(`my item .. ${item}`),
      err =>console.error(`error is ${err}`),
      () =>console.log('complete')
    );

    
  }
}
