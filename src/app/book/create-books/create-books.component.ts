import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { ICreateBook } from '../../shared/interface';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-books',
  templateUrl: './create-books.component.html',
  styleUrls: ['./create-books.component.css']
})
export class CreateBooksComponent implements OnInit {
  res: any;
  createBookForm: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private bookservice: BookService,
    private router: Router
  ) {}

  buildForm(){
    this.createBookForm = this.formBuilder.group({
      name: ['', Validators.required],
      title: ['', Validators.required],
      content: ['',Validators.required],
      author: ['',Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
    })
  }

  submit({ value }: { value: ICreateBook }) {
    this.bookservice.postCreateBook(value).subscribe(res => {
      this.res = res;
      console.log(res)
      if (this.res.is_success == true){
        this.router.navigate([''])
      }else{
        this.router.navigate(['/books'])
      }
    })
  }
  ngOnInit() {
    this.buildForm()
  }

}
