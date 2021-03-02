import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private http: HttpClient,) { 
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
  console.log(result);
}


}
