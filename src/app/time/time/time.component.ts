import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-time',
  standalone: true,
  imports: [],
  templateUrl: './time.component.html',
  styleUrl: './time.component.css'
})
export class TimeComponent implements OnInit{
  date: any = new Date();
  minutes: any = 0;
  seconds: any = 0;

  constructor() { 
  
    

  }
  ngOnInit() {
    // console.log("Seconds : ", this.seconds);
    this.minutes = "0" + this.minutes;
    this.seconds = "0" + this.seconds;
    setInterval(() => {
      if (this.seconds >= 59) {
        ++this.minutes;
        this.minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
        this.seconds = 0;
      } else {
        ++this.seconds;
      }
      this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;
    }, 1000);
  }
}