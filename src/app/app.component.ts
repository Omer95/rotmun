import { Component } from '@angular/core';
import { ToasterConfig } from 'angular2-toaster';
import { timeout } from '../../node_modules/@types/q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  public config: ToasterConfig = new ToasterConfig({
    tapToDismiss: true,
    timeout: 1500
  });
}
