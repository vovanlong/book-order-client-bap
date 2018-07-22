import { Injectable } from "@angular/core";
import { ILogin } from "../shared/interface";
import { Observable, pipe, throwError } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { map, catchError } from "rxjs/operators"

@Injectable()
export class LoginService {
    apiUrl = "http://maxnguyen-api.herokuapp.com/api/v1/auth";

   constructor(
       private http: HttpClient
   ){}

   postLogin(userLogin: ILogin) : Observable<boolean> {
       return this.http.post<boolean>(this.apiUrl + '/login', userLogin)
          .pipe(
              map(response => {
                return response
              }),
              catchError(this.handleError)
          )
   }

   handleError(error: HttpErrorResponse) {
      return throwError(error.error)
   }
}