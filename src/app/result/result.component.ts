import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
  score: number = 0;
  total: number = 0;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { score: number, total: number };
    this.score = state?.score || 0;
    this.total = state?.total || 0;
  }
}
