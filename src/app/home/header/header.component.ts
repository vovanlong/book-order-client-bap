import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  res: any;
  token: string;
  checktoken() {
    this.res = localStorage.getItem('userToken');
    this.token = this.res
    console.log(this.token)
  }

  ngOnInit() {
    this.checktoken()
  }

}
