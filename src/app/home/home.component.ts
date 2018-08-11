declare function require(path: string);
import { Component, OnInit, HostListener, ViewChildren, ViewChild, AfterViewInit } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import * as $ from 'jquery';
import { QueryList } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  imageSrc = require('./img/instagram/ins-1.jpg');
  introImage: Observable<any>;
  showAnimation = false;
  showAlina = false;
  showHebah = false;
  showShariq = false;
  showAli = false;
  showJami = false;
  showSaba = false;

  constructor(private fireStorage: AngularFireStorage) {
    const ref = this.fireStorage.ref('intro.jpg');
    this.introImage = ref.getDownloadURL();
  }
  @ViewChildren('test, test2') testElement: QueryList<any>;
  @ViewChild('alina') alinaEl;
  @ViewChild('hebah') hebahEl;
  @ViewChild('pres') shariqEl;
  @ViewChild('ali') aliEl;
  @ViewChild('jami') jamiEl;
  @ViewChild('saba') sabaEl;
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
        }, 800);
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
        }, 800);
        // this.showHebah = true;
      } else {
        this.showSaba = false;
      }
    }

  ngOnInit() {
    $('#preloader').delay(600).fadeOut();
  }
  ngAfterViewInit() {
    this.testElement.forEach(el => console.log(el));
  }

}
