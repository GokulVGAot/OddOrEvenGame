import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'oddOrEven';
  // oddNumberArray:number[]=[]
  // evenNumberArray:number[]=[]
  numberArray:number[]=[]
  gameStarted(gameNumber: number) {
    // if(gameNumber%2===0){
    //   this.evenNumberArray.push(gameNumber)
    // }
    // else{
    //   this.oddNumberArray.push(gameNumber)
    // }
    this.numberArray.push(gameNumber)
  }
}
