import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ShareDataService } from '../../share/share-data.service';

@Component({
  selector: 'app-inter-face',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './inter-face.component.html',
  styleUrl: './inter-face.component.css'
})
export class InterFaceComponent implements OnInit{
  Form = new FormGroup({
    username: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    difficulty: new FormControl('', Validators.required)
  })
  constructor(private router: Router, private shareData:ShareDataService) {

  }
  ngOnInit(): void {
    this.Form;
  } 
  onSubmit(){
    this.shareData.setLavel(this.Form.value.difficulty);
  }
}
