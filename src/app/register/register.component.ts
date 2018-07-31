import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { IRegister } from '../shared/interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  res: any;
  constructor(
    private formBuilder: FormBuilder,
    private registerService : RegisterService,
    private router: Router){}

  ngOnInit() {
    this.buildForm()
    
  }
  buildForm() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
      
    })
  }
  submit({ value } : {value: IRegister}){
    this.registerService.postRegister(value).subscribe(res => {
      this.res = res;
      console.log(res)
      if(this.res.status == 200){
        this.router.navigate([''])
      }
    })
  }
}
