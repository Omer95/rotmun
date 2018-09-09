import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-committees',
  templateUrl: './committees.component.html',
  styleUrls: ['./committees.component.scss']
})
export class CommitteesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#preloader').delay(2000).fadeOut();
    setTimeout(() => {
      $('.yellow-text').addClass('animated fadeInDown');
      $('.demo').addClass('animated fadeInLeft');
    }, 2000);
  }

}
