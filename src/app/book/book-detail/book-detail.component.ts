import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { IBook, IBooks, IReview, IOders, Quantity } from '../../shared/interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../../services/order.service';

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
  error: any;
  orderForm: FormGroup;
  quantity_client: Quantity= {
    quantity: 1
  }
  constructor(private route: ActivatedRoute, 
            private bookservice: BookService,
            private formBuilder: FormBuilder,
            private orderservice: OrderService,
             private router: Router
            ) 
            {}
  
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

  buildForm(){
    this.orderForm = this.formBuilder.group({
      receiver_name: ['',Validators.required],
      receiver_address: ['', Validators.required],
      receiver_phone: ['',Validators.required],
      quantity: ['',Validators.required],
      total_price: ['',Validators.required]
    })
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

  submit({ value }:{value: IOders}){
    const id = +this.route.snapshot.paramMap.get('id')
    this.orderservice.postOrder(value, id).subscribe(res=>{
      this.res = res
      console.log(this.res)
      if (this.res.is_success == true){
        this.router.navigate([''])
      }
      if (this.res.status == 404){
        this.error = res
      }
    })
  }
  
  ngOnInit() {
    this.getBookFormRoute();
    this.getReviewOfBook();
    this.buildForm();
  }

}
