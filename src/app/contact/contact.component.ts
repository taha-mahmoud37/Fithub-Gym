import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare const google: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, AfterViewInit {

   map: any;
    

  constructor() { }

    ngOnInit() {
    }
    ngAfterViewInit(): void {

    //  this.map = new google.maps.Map(document.getElementById("maps"), {
    //     center: { lat: 26.8206, lng: 30.8025 },
    //     zoom: 14,
    //   });
      
      
    }

  
  

}
