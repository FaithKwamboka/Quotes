import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

    @Input()
    quote!: Quote;
    quotes: any;
    constructor() { }
  
    @Output()
    isComplete= new EventEmitter<boolean>()
  
    quoteDetails(index: any){
      this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }
  
    ngOnInit() {
    }
  
    quoteDelete(complete:boolean){
      this.isComplete.emit(complete);
    }
  
    }

