import { Component, OnInit } from '@angular/core';
import { IBooks, IBook } from '../shared/interface';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  res: any;
  books: IBooks[];
  data: IBook[];
  constructor( private bookSevice: BookService, private router: Router) {
    
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

  delete(id: number): void{
    this.bookSevice.deleteBook(id).subscribe(
      res =>{
        this.res = res;
        console.log(this.res)
        if (this.res.is_success == true){
          this.router.navigate([''])
        }
      }
    )
  }

  ngOnInit() {
    this.getBooksFormService()
  }

}
