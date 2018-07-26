import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { ICreateBook } from '../../shared/interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-books',
  templateUrl: './create-books.component.html',
  styleUrls: ['./create-books.component.css']
})
export class CreateBooksComponent implements OnInit {
  res: any;
  // files: any[];
  // selectedFile: File = null
  createBookForm: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private bookservice: BookService,
    // private http: HttpClient
  ) {
    // this.files = []
   }
  // onFileSelected(event:any){
    
  //   this.selectedFile =<File>event.target.file[0]
  //   console.log("vovanlong"+this.selectedFile)
  // }

  // onUpload(){
  //   const fd = new FormData();
  //   fd.append('image', this.selectedFile, this.selectedFile.name)
  //   this.http.post("http://localhost:3000/api/v1/books",fd, {
  //     reportProgress:true,
  //     observe: 'events',
  //   }).subscribe(events =>{
     
  //     console.log(events)
  //   })
  // }
  buildForm(){
    this.createBookForm = this.formBuilder.group({
      name: [''],
      title: [''],
      content: [''],
      author: [''],
      price: [''],
      quantity: [''],
      image: [''],
    })
  }

  submit({ value }: { value: ICreateBook }) {
    this.bookservice.postCreateBook(value).subscribe(res => {
      this.res = res;
      console.log(res)
    })
  }
  ngOnInit() {
    this.buildForm()
  }

}
