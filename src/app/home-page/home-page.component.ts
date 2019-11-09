import { Component } from '@angular/core';
import { Feedback } from '../core/models/feedback.interface';
import { Benefit } from '../core/models/benefit.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent {
  feedbacks: Feedback[] = [
    {
      name: 'Екатерина',
      text: 'Отлично работает! Никаких нареканий. Пользуюсь каждый день!',
      city: 'Москва',
      stars: null
    }, {
      name: 'Никодим',
      text: 'Даже такой раздолбай как я, смог без труда освоить эту систему домашнего бухгалтера.',
      city: 'Санкт-Петербург',
      stars: null
    }, {
      name: 'Александр',
      text: 'Спасибо за отичное качество. Пользуемся всей семьёй и реально помогает экономить!',
      city: 'Воронеж',
      stars: null
    }, {
      name: 'Ольга',
      text: 'Меня все устравивает. Всем советую!',
      city: 'Москва',
      stars: null
    }
  ];

  benefits: Benefit[] = [
    {
      title: 'Учёт вчера',
      text: [
        'Куда ушли деньги',
        'Какие покупки того стоили',
        'На чём можно сэкономить'
      ],
      summary: 'Тратьте деньги с умом',
      color: '#948a8a'
    }, {
      title: 'Контроль сегодня',
      text: [
        'Сколько можно тратить',
        'Сколько нельзя трогать',
        'Сколько нужно отложить'
      ],
      summary: 'Финансы под контролем',
      color: '#ffff00'
    }, {
      title: 'Планирование завтра',
      text: [
        'Деньги на все расходы',
        'Достигайте своих целей',
        'Откладывайте больш'
      ],
      summary: 'Будущее прекрасно',
      color: '#0087ff'
    }
  ];
}
