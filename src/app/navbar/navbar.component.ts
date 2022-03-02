import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
display=false
  constructor() { }

  ngOnInit(): void {
  }
  // display navbar
show(){
  this.display=!this.display
}
  // end display navbar
}
