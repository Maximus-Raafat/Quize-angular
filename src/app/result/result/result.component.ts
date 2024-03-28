import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../../share/share-data.service';
import { DataExasy } from '../../data/dataEasy';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent implements OnInit {
  items:any[]
  score:any;
  constructor (private ShareDataService:ShareDataService, private DataExasy:DataExasy){
    this.items = ShareDataService.getItems();
    this.score = ShareDataService.getScore();
  }
  ngOnInit(): void {

  }
}
