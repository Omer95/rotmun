import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  introImage: Observable<any>;
  constructor(private fireStorage: AngularFireStorage) {
    const ref = this.fireStorage.ref('intro.jpg');
    this.introImage = ref.getDownloadURL();
  }

  ngOnInit() {
  }

}
