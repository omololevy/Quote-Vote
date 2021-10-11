import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, '--context--', '......the quote.......', '<Author>', '<name>', new Date(2021, 8, 17), 0, 0),

    new Quote(2, '--context--', '......the quote.......', '<Author>', '<name>', new Date(2021, 8, 23), 0, 0),

    new Quote(3, '--context--', '......the quote.......', '<Author>', '<name>', new Date(2021, 8, 29), 0, 0),

    new Quote(4, '--context--', '......the quote.......', '<Author>', '<name>', new Date(2021, 9, 11), 0, 0),

    new Quote(5, '--context--', '......the quote.......', '<Author>', '<name>', new Date(2021, 9, 27), 0, 0),

    new Quote(6, '--context--', '......the quote.......', '<Author>', '<name>', new Date(2021, 10, 2), 0, 0),
  ];

  toggleDetails(index: any) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  addNewQuote(quote: any) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
