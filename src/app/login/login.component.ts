import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ILogin } from "../shared/interface";
import { LoginService } from "../services/login.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    res: any;

    constructor(
        private formBuilder: FormBuilder,
        private loginService: LoginService,
        private router: Router
    ){}
    
    ngOnInit() {
      this.buildForm()
    }

    buildForm() {
        this.loginForm = this.formBuilder.group({
            email: [''],
            password: ['']
        })
    }

    submit({ value } : { value: ILogin }) {
        this.loginService.postLogin(value).subscribe(res => {
            this.res = res;
            console.log(this.res.data)
            if(this.res.status == 200) {
               localStorage.setItem('userToken', this.res.data)
               this.router.navigate(['profile'])
            }
        })
    }
}