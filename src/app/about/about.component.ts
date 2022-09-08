import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  @ViewChild('lightScreen') lightScreen: ElementRef | any;

  constructor() {}

  ngOnInit(): void {}

  oWindow(): void {
    this.lightScreen.nativeElement.style.transform = 'scale(1,1)';
  }

  close(): void {
    this.lightScreen.nativeElement.style.transform = 'scale(0,0)';
  }
}
