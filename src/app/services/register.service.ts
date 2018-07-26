import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IRegister } from "../shared/interface";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable()
export class RegisterService{
    apiUrl = "http://localhost:3000/api/v1/auth";
  constructor(private http: HttpClient){}
  
  postRegister(userRegister: IRegister): Observable<boolean> {
      return this.http.post<boolean>(this.apiUrl +'/register', userRegister)
      .pipe(
          map(response => {
              return response;
          }),
          catchError(this.handleError)
          )
  }
    handleError(error: HttpErrorResponse) {
        return throwError(error.error)
    }
}