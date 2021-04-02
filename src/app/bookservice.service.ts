import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from '../model/Book';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BookserviceService {

  private bookBorrowUrl = "http://localhost:8080/books/getBorrowedBooksNonJpa";

  constructor(private http:HttpClient) { }

  getAllBorrowedBooks():Observable<Book[]>{

    return this.http.get<Book[]>(this.bookBorrowUrl);

  }

}
