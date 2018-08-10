declare function require(path: string);
import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import * as $ from 'jquery';
import { delay } from 'q';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imageSrc = require('./img/instagram/ins-1.jpg');
  introImage: Observable<any>;
  showAnimation = false;

  constructor(private fireStorage: AngularFireStorage) {
    const ref = this.fireStorage.ref('intro.jpg');
    this.introImage = ref.getDownloadURL();
  }
  @ViewChild('test') testElement;
  @HostListener('window:scroll', [])
    onscroll() {
      if (window.pageYOffset >= this.testElement.nativeElement.offsetTop) {
        this.showAnimation = true;
      } else {
        this.showAnimation = false;
      }
    }

  ngOnInit() {
    $('#preloader').delay(600).fadeOut();
  }

}
