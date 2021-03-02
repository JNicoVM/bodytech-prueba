import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  currency;
  userId;
  id;
  title;
  body;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.queryParams.subscribe(params => {
      this.currency = JSON.parse(params["currency"]);
      this.userId = this.currency[0]["userId"];
      this.id = this.currency[1]["id"];
      this.title = this.currency[2]["title"];
      this.body = this.currency[3]["body"];
      console.log(this.currency);
  });
  }

}
