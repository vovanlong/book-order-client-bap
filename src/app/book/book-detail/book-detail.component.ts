import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';
import { IBook, IBooks, IReview } from '../../shared/interface';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  id: number;
  books: IBooks;
  book: IBook;
  res: any;
  reviews: any;
  user:any;
  image: any;
  
  constructor(private route: ActivatedRoute, private bookservice: BookService) {
   
   }
  
  getBookFormRoute(): void{
    const id = +this.route.snapshot.paramMap.get('id')
    this.bookservice.getDetailBook(id).subscribe(res => {
      this.res = res;
      this.book = this.res.data.book
      this.image = `http://localhost:3000${this.book.image}`
      // this.reviews = this.res.data.book.reviews
      console.log('long' + this.book.image )
      // console.log('number ' + this.reviews.average_rating)
    });
  }

  getReviewOfBook(): void{
    const id = +this.route.snapshot.paramMap.get('id')
    this.bookservice.getReviewBooks(id).subscribe(res =>{
      this.res = res;
      this.reviews = this.res.data.reivews
      // this.user = this.res.data.reivews.user
      // this.book = this.res.data.reivews.book
      console.log('user'+ this.user)
    })
  }

  ngOnInit() {
    this.getBookFormRoute();
    this.getReviewOfBook()
  }

}
