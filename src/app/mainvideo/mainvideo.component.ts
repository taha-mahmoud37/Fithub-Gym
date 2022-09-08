import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mainvideo',
  templateUrl: './mainvideo.component.html',
  styleUrls: ['./mainvideo.component.scss']
})
export class MainvideoComponent implements OnInit {

  @ViewChild('lightScreen') lightScreen: ElementRef | any ;

  constructor() { }

  ngOnInit(): void {
  }

  
  oWindow(): void {
    this.lightScreen.nativeElement.style.transform = 'scale(1,1)';
  }

  close(): void {
    
    this.lightScreen.nativeElement.style.transform = 'scale(0,0)';
  }

}
