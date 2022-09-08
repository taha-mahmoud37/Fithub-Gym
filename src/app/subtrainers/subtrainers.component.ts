import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-subtrainers',
  templateUrl: './subtrainers.component.html',
  styleUrls: ['./subtrainers.component.scss'],
})
export class SubtrainersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  /* trainer carousel */
  tarinerOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: false,
  };

  /* trainer carousel */
}
