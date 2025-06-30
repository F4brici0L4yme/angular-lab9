import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { QuestionsComponent } from '../questions/questions.component';
import { ResultComponent } from '../result/result.component';
import { provideRouter } from '@angular/router';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'result', component: ResultComponent },
];

export default provideRouter(routes);
