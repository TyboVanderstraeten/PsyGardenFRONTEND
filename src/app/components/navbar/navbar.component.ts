import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  registerClicked() {
    alert("You can't register yet!");
  }

  loginClicked() {
    alert("You can't login yet!");
  }

}
