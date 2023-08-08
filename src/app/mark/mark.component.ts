import { Component } from '@angular/core';

@Component({
  selector: 'app-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.css']
})
export class MarkComponent {
  foods = [
    {value: 10, viewValue: 20},
    {value: 11, viewValue: 21}
  ]
  selectedFood = 11;
}
