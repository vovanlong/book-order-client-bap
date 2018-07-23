import { Component, OnInit } from '@angular/core';
import { IBooks, IBook } from '../shared/interface';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  res: any;
  books: IBooks[];
  data: IBook[];
  constructor( private bookSevice: BookService) {
    
   }
   getBooksFormServices(): void{
     this.bookSevice.getBooks().subscribe(res => {
       this.books = res
       console.log(this.books)
       
     })
   }
  getBooksFormService(): void {
    this.bookSevice.getBook().subscribe(res => {
      this.res = res;
      this.data = this.res.data.books
      console.log(this.res)
    })
  }

  ngOnInit() {
    this.getBooksFormServices()
    this.getBooksFormService()
  }

}
