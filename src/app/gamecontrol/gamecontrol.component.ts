import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {

 @Output() gameEventFired = new EventEmitter<number>()
lastNumber:number=0;
gameinterval:any;

  constructor() { }

  ngOnInit(): void {
  }

  startgame(){
   this.gameinterval= setInterval(()=>{
      this.gameEventFired.emit(this.lastNumber+1);
      this.lastNumber++
    },1000)
  }

  stopGame(){
    clearInterval(this.gameinterval)
  }

}
