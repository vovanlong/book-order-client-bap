import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { IOders } from "../shared/interface";
import { Observable, throwError } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";

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

    getOders(): Observable<IOders[]>{
        return this.http.get<IOders[]>(this.apiUrl + "orders")
        .pipe(
            map(response => {
                return response
            }),
            catchError(this.handleError)
        )
    }

    deleteOrder(id: number): Observable<any>{
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('userToken'),
            })
        };
        return this.http.delete<any>(this.apiUrl + "orders/"+id,httpOptions)
        .pipe(
            tap(
            res => console.log(`delte book ${JSON.stringify(res)}`),
            )
        )
    }

    handleError(error: HttpErrorResponse) {
        return throwError(error.error)
    }
}