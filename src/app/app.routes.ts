import { Routes } from '@angular/router';
import { ResultComponent } from './result/result/result.component';
import { QuizeCompComponent } from './quizeComp/quize-comp/quize-comp.component';
import { InterFaceComponent } from './interFace/inter-face/inter-face.component';

export const routes: Routes = [
    { path: '', redirectTo: '/sartApp', pathMatch: 'full' },
    { path: '/sartApp', component: InterFaceComponent },
    { path: '/qieze', component: QuizeCompComponent },
    { path: '/result', component: ResultComponent },

];
