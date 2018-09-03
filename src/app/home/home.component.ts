import { Component, OnInit, HostListener, ViewChildren, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { QueryList } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showAnimation = false;
  showAlina = false;
  showHebah = false;
  showShariq = false;
  showAli = false;
  showJami = false;
  showSaba = false;
  showZain = false;
  lat: Number = 24.867097;
  lng: Number = 67.025804;


  constructor() {
  }
  @ViewChildren('test, test2') testElement: QueryList<any>;
  @ViewChild('alina') alinaEl;
  @ViewChild('hebah') hebahEl;
  @ViewChild('pres') shariqEl;
  @ViewChild('ali') aliEl;
  @ViewChild('jami') jamiEl;
  @ViewChild('saba') sabaEl;
  @ViewChild('zain') zainEl;
  @HostListener('window:scroll', [])
    onscroll() {
      this.testElement.forEach( (anElement) => {
        if (window.pageYOffset >= anElement.nativeElement.offsetTop) {
          this.showAnimation = true;
        } else {
          this.showAnimation = false;
        }
      });
      if (window.pageYOffset >= this.alinaEl.nativeElement.offsetTop) {
        setTimeout( () => {
          this.showAlina = true;
        }, 200);
      } else {
        this.showAlina = false;
      }
      if (window.pageYOffset >= this.hebahEl.nativeElement.offsetTop) {
        setTimeout( () => {
          this.showHebah = true;
        }, 400);
        // this.showHebah = true;
      } else {
        this.showHebah = false;
      }
      if (window.pageYOffset >= this.hebahEl.nativeElement.offsetTop) {
        setTimeout( () => {
          this.showShariq = true;
        }, 600);
        // this.showHebah = true;
      } else {
        this.showShariq = false;
      }
      if (window.pageYOffset >= this.aliEl.nativeElement.offsetTop) {
        setTimeout( () => {
          this.showAli = true;
        }, 200);
      } else {
        this.showAli = false;
      }
      if (window.pageYOffset >= this.jamiEl.nativeElement.offsetTop) {
        setTimeout( () => {
          this.showJami = true;
        }, 400);
        // this.showHebah = true;
      } else {
        this.showJami = false;
      }
      if (window.pageYOffset >= this.jamiEl.nativeElement.offsetTop) {
        setTimeout( () => {
          this.showSaba = true;
        }, 600);
        // this.showHebah = true;
      } else {
        this.showSaba = false;
      }
      if (window.pageYOffset >= this.zainEl.nativeElement.offsetTop) {
        setTimeout( () => {
          this.showZain = true;
        }, 200);
      } else {
        this.showZain = false;
      }
    }

  ngOnInit() {
    $('#preloader').delay(600).fadeOut();
  }

}
