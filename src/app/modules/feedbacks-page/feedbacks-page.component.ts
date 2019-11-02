import { Component, OnInit } from '@angular/core';
import {Feedback} from '../../models/feedback.interface';

@Component({
  selector: 'app-feedbacks-page',
  templateUrl: './feedbacks-page.component.html',
  styleUrls: ['./feedbacks-page.component.sass']
})
export class FeedbacksPageComponent implements OnInit {
  feedbacks: Feedback[] = [
    {
      name: 'Екатерина',
      text: 'Отлично работает! Никаких нареканий. Пользуюсь каждый день!',
      city: 'Москва',
      stars: null,
      date: Date.now()
    }, {
      name: 'Никодим',
      text: 'Даже такой раздолбай как я, смог без труда освоить эту систему домашнего бухгалтера.',
      city: 'Санкт-Петербург',
      stars: null,
      date: Date.now()
    }, {
      name: 'Александр',
      text: 'Спасибо за отичное качество. Пользуемся всей семьёй и реально помогает экономить!',
      city: 'Воронеж',
      stars: null,
      date: Date.now()
    }, {
      name: 'Ольга',
      text: 'Меня все устравивает. Всем советую!',
      city: 'Москва',
      stars: null,
      date: Date.now()
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
