import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  username: string = 'Shinchan'
  a = 70;
  b = 30;
  imgurl =  "https://images.justwatch.com/poster/199900582/s718/crayon-shin-chan.jpg"
 

isgood = false;

 fun(){

     this.isgood = this.isgood? false : true;
 }
  isdisable = false
}

