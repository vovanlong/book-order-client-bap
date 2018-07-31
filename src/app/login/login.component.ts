import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ILogin } from "../shared/interface";
import { LoginService } from "../services/login.service";
import { Router } from "@angular/router";
import { emailValidation } from "../shared/customvalidators";

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    res: any;
    errors: any;

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
            email: ['', Validators.required],
            password: ['',Validators.required]
        })
    }

    submit({ value } : { value: ILogin }) {
        this.loginService.postLogin(value).subscribe(res => {
                this.res = res;
                console.log(this.res)
            if(this.res.status == 200) {
                localStorage.setItem('userToken', this.res.access_token)
               this.router.navigate([''])
            }
            if (this.res.status == "VALIDATION_ERROR"){
                this.errors = this.res.validations
                console.log("loi login" + this.errors.attribute )
            }
        })
    }
}