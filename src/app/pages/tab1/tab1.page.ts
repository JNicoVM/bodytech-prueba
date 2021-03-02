import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  data = [];

   constructor(
    public router: Router,
    private http: HttpClient,
    public navCtrl: NavController) { 
      this.loadData();
    }

  ngOnInit() {
  }

  

  loadData(){
    this.http.get("https://jsonplaceholder.typicode.com/posts/")
    .subscribe(res => {
      console.log(res);
      this.data = this.data.concat(res);
    })
}

prueba(result){
  var kvArray = [{"userId" : result["userId"]},
  {"id" : result["id"]},
  {"title" : result["title"]},
  {"body" : result["body"]}];
  let navigationExtras: NavigationExtras = {
    queryParams: {
        currency: JSON.stringify(kvArray)
    }
};
  this.router.navigate(["/details/"], navigationExtras);
}


}
