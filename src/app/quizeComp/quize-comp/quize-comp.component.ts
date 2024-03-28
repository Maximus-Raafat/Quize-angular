import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, ViewChild, viewChild } from '@angular/core';
import { Data, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Router } from 'express';
import { ShareDataService } from '../../share/share-data.service';
import { DataExasy } from '../../data/dataEasy';
import { DataMiddem } from '../../data/dataMid';
import { DataHard } from '../../data/dataHard';
@Component({
  selector: 'app-quize-comp',
  standalone: true,
  imports: [CommonModule,RouterOutlet, RouterLink, RouterLinkActive,],
  templateUrl: './quize-comp.component.html',
  styleUrl: './quize-comp.component.css'
})
export class QuizeCompComponent implements OnInit{
  textAraay: any = [];
  questions:any = [
   
  ];
  i: number = 0;
  totalyQuestion!:number;
  question: any;;
  score:number = 0;
  constructor(private ShareData:ShareDataService, private dataEasy:DataExasy, private dataMiddem:DataMiddem, private dataHard:DataHard) { 
    
    console.log(this.ShareData.getLavel())
    this.factory(this.ShareData.getLavel())
    console.log(this.ShareData.getLavel())
  }
  
  ngOnInit(): void {
  }
 
  preavFun() : void{ 
    if (this.i > 0) {
      --this.i
      this.question = this.questions[this.i];
    } 
  }
  
  nextFun() : void {
    if (this.i < this.questions.length) {
      ++this.i
      this.question = this.questions[this.i];
      if(this.i == this.questions.length) {
        this.i = 0;
        this.question = this.questions[this.i];
      }
       console.log(this.score)
    }
  }

  onSelecting(answer: any) {
    console.log(answer.value)
    if(answer.value){
      this.scoreItems(answer.value)
      this.questions[this.i].checked = true;
      this.questions[this.i].selected = answer.value;
      this.questions[this.i].yourAnswer = answer.value;
    }
    
  }

  scoreItems(answer:any) {
    console.log(this.questions[this.i].answer == answer)
    if (this.questions[this.i].answer == answer) {
      ++this.score
    }
  }

  itemsAnswer() : any{ 
   let newArray:any = [];
    this.questions.map((item:any)=>{

     newArray.push({
        id:item.id,
        question:item.question,
        yourAnswer:item.selected?item.selected: "Don't have answer",
        answer:item.answer
      })
   })
   return newArray;
  }
  factory(choseCatogry:any) : any {
    if (choseCatogry == "easy") {
      this.questions = this.dataEasy.questions;
      this.question= this.questions[this.i];
      this.totalyQuestion = this.dataEasy.questions.length; 
    } else if (choseCatogry == "mid") {
      this.questions = this.dataMiddem.questions;
      this.question= this.questions[this.i];
      this.totalyQuestion = this.dataMiddem.questions.length; 

    } else if (choseCatogry == "hard") {
      this.questions = this.dataHard.questions;
      this.question= this.questions[this.i];
      this.totalyQuestion = this.dataHard.questions.length; 
    } else {
      console.log("error")
    }
  }
  
  navigate() : void {
    this.ShareData.setItems(this.itemsAnswer() , this.score);
  }
}
