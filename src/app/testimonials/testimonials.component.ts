import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TESTIMONIALSComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  stars = Array(5);
}
