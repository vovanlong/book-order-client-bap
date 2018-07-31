import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICreateBook, IBooks } from '../../shared/interface';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  @Input() book: ICreateBook;
  // book: any
  id: number
  res: any
  editBookForm: FormGroup
  errors: any
  constructor(private route: ActivatedRoute,
             private bookservice: BookService,
             private formBuilder :FormBuilder,
             private router: Router
       ) { }

  getBooksById(): void{
    this.id = +this.route.snapshot.paramMap.get('id')
    console.log("rails "+this.id)
    this.bookservice.getDetailBook(this.id).subscribe(res => {
      this.res = res
      if(this.res != null){
        this.book = this.res.data.book
      }else{
        this.book = null
      }
      // this.book = this.res.data.book
      console.log("nguyeb chi max" + this.book.author)
    })
  }
  
  save(): void{
    this.id = +this.route.snapshot.paramMap.get('id')
    console.log("rhymastic"+this.id)
    this.bookservice.updateBook(this.id,this.book ).subscribe(res => {
      this.res = res
      console.log("du lieu tra ve"+ this.res)
      if (this.res.is_success == true){
        this.router.navigate([''])
      }else {
        this.router.navigate(['/books/'+this.id])
      }
      if (this.res.status == 'VALIDATION_ERROR') {
        this.errors = this.res.validations
      } else {
        
      }
    })
  }

  ngOnInit() {
    this.getBooksById();
   
  }

}
