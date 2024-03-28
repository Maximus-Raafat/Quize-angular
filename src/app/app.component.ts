import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuizeCompComponent } from "./quizeComp/quize-comp/quize-comp.component";
import { TimeComponent } from './time/time/time.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, TimeComponent]
})
export class AppComponent {

  constructor(){}

}
