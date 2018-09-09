import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  imgsrc1 = '../about/img/instagram/ins-2.jpg';
  constructor() { }

  ngOnInit() {
    $('#preloader').delay(2000).fadeOut();
    setTimeout(() => {
      $('.container').addClass('animated pulse');
    }, 2000);
  }

}
