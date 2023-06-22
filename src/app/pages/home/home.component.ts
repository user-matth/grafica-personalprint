import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cookies: boolean = false;

  constructor() { }

  ngOnInit() {
    this.getToken()
  }

  getToken() {
    if (localStorage.getItem('token')) {
      this.cookies = true;
    } else {
      this.cookies = false;
    }
  }

  setItem() {
    localStorage.setItem('token', 'true');
    this.cookies = true;
  }

}
