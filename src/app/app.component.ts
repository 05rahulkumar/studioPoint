import { Component } from '@angular/core';
declare let myt:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'housix';
  clk(){
    myt();
  
  }
}
