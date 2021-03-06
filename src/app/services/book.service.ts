import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, throwError, of } from "rxjs";
import { IBooks, IBook, IReview, ICreateBook } from "../shared/interface";
import { map, catchError, tap } from "rxjs/operators";
import { error } from "util";

@Injectable()
export class BookService {
    apiURL = "http://localhost:3000/api/v1/"
    constructor(private http: HttpClient){}
    

    getBooks(): Observable<IBooks[]>{
        return this.http.get<IBooks[]>(this.apiURL + "books")
         .pipe(
             map(response => {
                 return response
             }),
            catchError(this.handleError)
            )
    }

    getBook(): Observable<IBook[]> {
        return this.http.get<IBook[]>(this.apiURL + "books").pipe(
            tap(res => {return res})
        )
    }

    postCreateBook(createBook: ICreateBook): Observable<boolean>{
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('userToken')
            })
        };
        return this.http.post<boolean>(this.apiURL + "books", createBook, httpOptions)
         .pipe(
             map(
                 res => {
                     return res;
                 }
             ),
             catchError(this.handleError)
         )
    }


    getDetailBook(id:number): Observable<IBook>{
        return this.http.get<IBook>(this.apiURL+ "books/"+id)
        .pipe(
            tap(res => console.log(`res long = ${JSON.stringify(res)}+ id book ${id}}`))
        )
        .pipe(
                tap(res => console.log(res))
        )

    }

    getReviewBooks(id:number):Observable<IReview>{
        return this.http.get<IReview>(this.apiURL+ "books/"+id+"/reviews")
        .pipe(
            tap(res => console.log(res))
        )
    }

    updateBook(id:number,book: ICreateBook): Observable<any>{
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('userToken'),
            })
        };
        return this.http.put(this.apiURL+"books/" + id, book,httpOptions).pipe(
            tap(updateBook => console.log(`updated book= ${JSON.stringify(updateBook)}`)),
            catchError(this.handleError)
        ); 
    }

    deleteBook(id: number): Observable<any>{
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('userToken'),
            })
        };
        return this.http.delete<any>(this.apiURL + "books/" + id,httpOptions).pipe(
            tap(
                deleteBook => console.log(`delete book ${JSON.stringify(deleteBook)}`),
                catchError(this.handleError)
            )
        )
    }
    handleError(error: HttpErrorResponse) {
        return throwError(error.error)
    }   
}