import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IOders } from "../shared/interface";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable()
export class OrderService{
    apiUrl = "http://localhost:3000/api/v1/";

    constructor(private http: HttpClient){}

    postOrder(order: IOders, id:number): Observable<boolean>{
        return this.http.post<boolean>(this.apiUrl+'/books/'+id+'/orders',order)
        .pipe(
            map(res => {
               return res
            //    console.log(res)
            }),
            catchError(this.handleError)
        )
    }
    handleError(error: HttpErrorResponse) {
        return throwError(error.error)
    }
}