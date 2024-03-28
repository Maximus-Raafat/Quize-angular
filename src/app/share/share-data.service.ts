import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  private items!:any;
  private score!:any;
  private lavelQs:any;
  constructor() { }

  setItems(items:any=[] , score?:number) : void { 
    this.items = items;
    this.score = score;
  }
  getItems() : any { 
      return this.items;
  }
  getScore() : any { 
    return this.score;
 }
 setLavel(levalQues:any) : void{
  this.lavelQs = levalQues;
 }
 getLavel() : any{
  return this.lavelQs;
 }

}
