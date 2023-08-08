import {Injectable} from '@angular/core';
import { Question } from '../model/question';
import { Observable } from 'rxjs'
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class QuestionService{

    constructor(private readonly http: HttpClient){}

    getQuestionNo():number {
        return 123345667;
    }

    // getQuestions(): Observable<Question[]> {
    //     return this.http
    //         .get<{ questions: Question[] }>(`/questions`);
    // }
}