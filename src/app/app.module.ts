import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { HighlightDirective } from './highlight.directive';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { FormsModule } from '@angular/forms';
import { DateCountPipe } from './date-count.pipe';


@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    HighlightDirective,
    QuoteDetailComponent,
    QuotesFormComponent,
    DateCountPipe,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
