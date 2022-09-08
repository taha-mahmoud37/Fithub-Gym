import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /* happy-counter */
  happyNumber: number = 0;

  happyCountStop:any = setInterval(() => {
         this.happyNumber++;
         if(this.happyNumber === 874) {
             clearInterval(this.happyCountStop)
         }
  },9);
  /* happy-counter */

  /* total-counter */
  totalNumber: number = 0;

  totalCountStop:any = setInterval(() => {
         this.totalNumber++;
         if(this.totalNumber === 987) {
             clearInterval(this.totalCountStop)
         }
  },10);
  /* total-counter */

  /* gym-counter */
  gymNumber: number = 0;

  gymCountStop:any = setInterval(() => {
         this.gymNumber++;
         if(this.gymNumber === 587) {
             clearInterval(this.gymCountStop)
         }
  },7);
  /* gym-counter */

  /* cup-counter */
  cupNumber: number = 0;

  cupCountStop:any = setInterval(() => {
         this.cupNumber++;
         if(this.cupNumber === 748) {
             clearInterval(this.cupCountStop)
         }
  },8);
  /* gym-counter */

}
