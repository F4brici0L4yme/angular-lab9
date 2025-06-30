import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionService } from '../question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css'
})
export class QuestionsComponent {
  questions: any[] = [];
  currentQuestionIndex = 0;
  score = 0;
  feedback = '';

  constructor(private questionService: QuestionService, private router: Router) {
    this.questions = this.questionService.getQuestions();
  }

  answer(option: string) {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    if (option === currentQuestion.correctAnswer) {
      this.score++;
      this.feedback = '✅ Correcto!';
    } else {
      this.feedback = '❌ Incorrecto';
    }

    setTimeout(() => {
      this.feedback = '';
      this.currentQuestionIndex++;
      if (this.currentQuestionIndex >= this.questions.length) {
        this.router.navigate(['/result'], { state: { score: this.score, total: this.questions.length } });
      }
    }, 1000);
  }
}
