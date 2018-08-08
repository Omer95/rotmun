import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  mobileView = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  takeMeHome() {
    this.router.navigate(['/home']);
  }
  showSidebar() {
    this.mobileView = !this.mobileView;
  }

}
