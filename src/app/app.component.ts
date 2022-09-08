import { Component, HostListener, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'fithub-gym';
  constructor(private spinner: NgxSpinnerService) {
       this.spinner.show();

       setTimeout(() => {
        this.spinner.hide();
       }, 5000)
  }

  ngOnInit() {
    Aos.init();
  }

  onActive() {
    window.scroll(0, 0);
  };

  toTop(): void {
    window.scrollTo(0,0)
  }


  @HostListener('window:scroll')
  onWindowScroll() {
    let nav = document.querySelector('.navbar');
    let top: HTMLElement| any = document.getElementById('top');
    if (window.scrollY > 30) {
      nav?.classList.add('nav-scroll');
      top.classList.add('btn-top');
    } else {
      nav?.classList.remove('nav-scroll');
      top.classList.remove('btn-top');
    }
  }

}
