import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
res: any;
token: string;
    checktoken(){
        this.res = localStorage.getItem('userToken');
        this.token = this.res
        console.log(this.token)
    }

    ngOnInit(){
        this.checktoken()
    }
}