import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Problem Solving', '"When assigned a colligue it assist, it is not a punishment, consider it a chance to boost your knowledge and skills."', 'TM. Mercy Nzau', 'Levy', new Date(2021, 8, 17), 0, 0),

    new Quote(2, 'Success', '"Self-belief  and Hard work will always earn you success."', '-Virat Kohli', 'Fay Kotech`', new Date(2021, 8, 23), 0, 0),

    new Quote(3, 'Love', ' “I have learned not to worry about love; but to honor its coming with all my heart.”', '-Alice Walker', '-Isaac Otieno>', new Date(2021, 8, 29), 0, 0),

    new Quote(4, 'Success', '“To succeed in life, you need two things: ignorance and confidence.”', '-Mark Twain', 'Levy Omolo', new Date(2021, 9, 11), 0, 0),

    new Quote(5, 'Pain', '“The more we diminish our own pain, or rank it compared to what others have survived, the less empathetic we are to everyone.”', '-Brene Brown', 'Michelle', new Date(2021, 9, 27), 0, 0),

    new Quote(6, 'Happiness', ' “Happiness quite unshared can scarcely be called happiness; it has no taste.”', 'Charlotte Bronte`', 'Florence', new Date(2021, 10, 2), 0, 0),
  ];

  toggleDetails(index: any) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  addNewQuote(quote: any) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote);
  }

  deleteQuote(isSeen: any, index: any) {
    if (isSeen) {
      let toDelete = confirm(`Are you sure you want to delete Quote about  ${this.quotes[index].quote} ? `)

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
