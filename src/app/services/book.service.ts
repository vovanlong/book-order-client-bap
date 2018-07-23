import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { IBooks, IBook } from "../shared/interface";
import { map, catchError, tap } from "rxjs/operators";

@Injectable()
export class BookService {
    apiURL = "https://maxnguyen-api.herokuapp.com/api/v1/"
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
    handleError(error: HttpErrorResponse) {
        return throwError(error.error)
    }   
}