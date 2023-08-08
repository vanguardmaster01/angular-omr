import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../model/question';
import { QuestionService } from '../service/question.service';
import { Subject, combineLatest, throwError } from "rxjs";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit{

  iIndex:Number | undefined;
  questions:Question[] = [];
  constructor(private questionService: QuestionService){

  }

  ngOnInit(): void {
    this.iIndex = this.questionService.getQuestionNo();
    // combineLatest([
    //   this.questionService.getQuestions()
    // ])
  }


}
