declare function require(path: string);
import { Component, OnInit, HostListener, ViewChildren, AfterViewInit } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import * as $ from 'jquery';
import { delay } from 'q';
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

  constructor(private fireStorage: AngularFireStorage) {
    const ref = this.fireStorage.ref('intro.jpg');
    this.introImage = ref.getDownloadURL();
  }
  @ViewChildren('test, test2') testElement: QueryList<any>;
  @HostListener('window:scroll', [])
    onscroll() {
      this.testElement.forEach( (anElement) => {
        if (window.pageYOffset >= anElement.nativeElement.offsetTop) {
          this.showAnimation = true;
        } else {
          this.showAnimation = false;
        }
      });
    }

  ngOnInit() {
    $('#preloader').delay(600).fadeOut();
  }
  ngAfterViewInit() {
    this.testElement.forEach(el => console.log(el));
  }

}
