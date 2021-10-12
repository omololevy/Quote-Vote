import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote = new Quote(0, "", "", "", "", new Date, 0, 0);
  @Output() isLike = new EventEmitter <boolean>();
  @Output() isSeen = new EventEmitter<boolean>();

  upVote(){
    this.quote.likes+=1;
  }

  downVote () {
    
    this.quote.dislikes+=1;
  }

  quoteDelete (seen:boolean) {
    this.isSeen.emit(seen);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
