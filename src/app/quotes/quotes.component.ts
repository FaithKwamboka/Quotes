import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[]= [
    new Quote(1, "The greatest glory in living lies not in never falling, but in rising every time we fall.", "Nelson Mandela",0, 0, "", "Lucy", new Date(2010,3,20)),
    new Quote(2, "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.", "Oprah Winfrey", 0, 0, "", "Elijah", new Date(2019,3,20)),
    new Quote(3, "Do not go where the path may lead, go instead where there is no path and leave a trail.","Ralph Waldo Emerson", 0, 0, "", "Peter Doe", new Date(2015,5,20)),
    // new Quote(4,"Life is never fair, and perhaps it is a good thing for most of us that it is not.", "Oscar Wilde", 0, 0, "", "Maureen Etoo", new Date(2020,35,15)),
    // new Quote(5, "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma — which is living with the results of other people's thinking.", "Steve Jobs", 0, 0, "", "John Steve", new Date(2021,3,21)) 
  ]
  constructor() { }

  ngOnInit(): void {
  }

  quoteDetails(index: any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isComplete: any, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete: "${this.quotes[index].quote}"?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    this.quotes.push(quote)
  }

  completeQuote(isComplete: any, index: number){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
}
