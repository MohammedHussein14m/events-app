import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private http: HttpClient) {
    http.get('http://localhost:3000/events').subscribe((data: any) => {
      this.events = data;
    });
  }

  events = [];

  click() {
    this.http.post('http://localhost:3000/events',{title : "eesse1"})
    .subscribe((data) => this.events.push(data))
  }

}


/*
"title" : "event1",
      "date" : "3/11/2020",
      "time" : "8:00 am",
      "start" : "early start",
      "price" : "80$",
      "attendance" : 1000,
      "address" : "adressssss",
      "url" : "www.mestoooooo.com"
*/
