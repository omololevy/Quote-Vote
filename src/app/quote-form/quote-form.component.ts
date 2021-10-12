import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quote(0, "", "", "", "", new Date, 0, 0);
  @Output() addQuote = new EventEmitter<Quote>(); 

   submitQuote(){
  let me =  this.addQuote.emit(this.newQuote);
  alert('Great! Thanks for adding a new Quote. Check below to see your amazing Quote!')
  }
  
  


  constructor() { }

  ngOnInit(): void {
  }

}
