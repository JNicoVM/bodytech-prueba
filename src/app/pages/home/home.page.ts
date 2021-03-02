import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IonVirtualScroll } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  data = [];

  constructor(
    public authService: AuthService, 
    public router: Router,
    private http: HttpClient,) { 
      this.loadData();
    }

  ngOnInit() {
  }

  onLogOut(){
      this.authService.logout();
      // this.router.navigate(["/login"]);
  }

  loadData(){
      this.http.get("https://jsonplaceholder.typicode.com/posts/")
      .subscribe(res => {
        console.log(res);
        this.data = this.data.concat(res);
      })
  }

  prueba(result){
    console.log(result);
  }




}
