import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { IRegister } from '../shared/interface';

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
    private registerService : RegisterService){}

  ngOnInit() {
    this.buildForm()
    
  }
  buildForm() {
    this.registerForm = this.formBuilder.group({
      name: [''],
      email: [''],
      password: ['']
      
    })
  }
  submit({ value } : {value: IRegister}){
    this.registerService.postRegister(value).subscribe(res => {
      this.res = res;
      console.log(res)
    })
  }
}
