import { AfterViewInit, Component} from '@angular/core';
import { Slide } from '../../../../core/models/slide.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent implements AfterViewInit {
  timerId: number;
  slides: Slide[] = [
    {
      url: './assets/slide1.jpg',
      isShow: true,
      text: 'Надоело тратить время на подсчеты своих финансов?'
    }, {
      url: './assets/slide2.jpg',
      isShow: false,
      text: 'Не знаете, как спланировать свой бюджет?'
    }, {
      url: './assets/slide3.jpg',
      isShow: false,
      text: 'У нас есть для вас решение!'
    }
  ];

  ngAfterViewInit() {
    let i = 0;
    let prev = 0;
    this.timerId = setInterval(() => {
      prev = i;
      i = ( i === this.slides.length - 1) ? 0 : i + 1;
      this.slides[prev].isShow = false;
      this.slides[i].isShow = true;
    }, 5000);
  }

}
