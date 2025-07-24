import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, lastValueFrom, throwError } from 'rxjs';

@Injectable()
export class Api {
  private readonly URL = ''; // TODO agregar path por variable de entorno

  constructor(private _http: HttpClient) {}

  async get<T>(endpoint: string): Promise<T> {
    const req = this._http
      .get<T>(`${this.URL}/${endpoint}`)
      .pipe(catchError(this.handleError));

    return await lastValueFrom(req);
  }

  async post<T>(endpoint: string, body: {}): Promise<T> {
    const req = this._http
      .post<T>(`${this.URL}/${endpoint}`, body)
      .pipe(catchError(this.handleError));

    return await lastValueFrom(req);
  }

  async put<T>(endpoint: string, body: {}): Promise<T> {
    const req = this._http
      .put<T>(`${this.URL}/${endpoint}`, body)
      .pipe(catchError(this.handleError));

    return await lastValueFrom(req);
  }

  async delete<T>(endpoint: string, body: {}): Promise<T> {
    const req = this._http
      .delete<T>(`${this.URL}/${endpoint}`, body)
      .pipe(catchError(this.handleError));

    return await lastValueFrom(req);
  }

  private handleError(error: HttpErrorResponse) {
    console.error('MY ERROR', error);

    return throwError(() => new Error());
  }
}
