import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.scss'],
})
export class PortfoliosComponent implements OnInit {
  @ViewChild('all') allItems: ElementRef | any;
  @ViewChild('weightLoss') weightLoss: ElementRef | any;
  @ViewChild('powerYoga') powerYoga: ElementRef | any;
  @ViewChild('weightGain') weightGain: ElementRef | any;
  @ViewChild('boxing') boxing: ElementRef | any;
  constructor() {}

  ngOnInit(): void {
    let navBtn = document.querySelectorAll('.btn-nav');
    navBtn.forEach((navEle) => {
      navEle.addEventListener('click', () => {
        navBtn.forEach((nav) => nav.classList.remove('active'));
        navEle.classList.add('active');
      });
    });
  }
  alls(): void {
    this.allItems.nativeElement.style.display = 'flex';
    this.weightLoss.nativeElement.style.display = 'none';
    this.powerYoga.nativeElement.style.display = 'none';
    this.weightGain.nativeElement.style.display = 'none';
    this.boxing.nativeElement.style.display = 'none';
  }
  weightL(): void {
    this.allItems.nativeElement.style.display = 'none';
    this.weightLoss.nativeElement.style.display = 'flex';
    this.powerYoga.nativeElement.style.display = 'none';
    this.weightGain.nativeElement.style.display = 'none';
    this.boxing.nativeElement.style.display = 'none';
  }
  power(): void {
    this.allItems.nativeElement.style.display = 'none';
    this.weightLoss.nativeElement.style.display = 'none';
    this.powerYoga.nativeElement.style.display = 'flex';
    this.weightGain.nativeElement.style.display = 'none';
    this.boxing.nativeElement.style.display = 'none';
  }
  weightG(): void {
    this.allItems.nativeElement.style.display = 'none';
    this.weightLoss.nativeElement.style.display = 'none';
    this.powerYoga.nativeElement.style.display = 'none';
    this.weightGain.nativeElement.style.display = 'flex';
    this.boxing.nativeElement.style.display = 'none';
  }
  boxings(): void {
    this.allItems.nativeElement.style.display = 'none';
    this.weightLoss.nativeElement.style.display = 'none';
    this.powerYoga.nativeElement.style.display = 'none';
    this.weightGain.nativeElement.style.display = 'none';
    this.boxing.nativeElement.style.display = 'flex';
  }
}

