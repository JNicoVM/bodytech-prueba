import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Log out', url: "", icon: 'warning' },
  ];
  constructor() {}
  
  click(){
    console.log("Hey");
  }

}
