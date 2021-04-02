import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-bookcomponent',
  templateUrl: './bookcomponent.component.html',
  styleUrls: ['./bookcomponent.component.css']
})
export class BookcomponentComponent implements OnInit {

  public Books =[];
  constructor(private bookService :BookserviceService) { }

  ngOnInit() {
  
    this.bookService.getAllBorrowedBooks().subscribe(data => this.Books =data);

  }

}
