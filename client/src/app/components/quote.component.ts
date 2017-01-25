import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Company } from '../models/company.model';
import { Quote } from '../models/quote.model';
import { QuotesService } from '../services/quotes.service';


@Component({
    //moduleId: module.id,
    selector: 'quote',
    templateUrl: './quote.component.html',
    styleUrls: ['./quote.component.css'],
    providers: [QuotesService]
})

export class QuoteComponent implements OnInit {

    title: string = "Work List";
    quotes: Quote[];
    selectedQuote: Quote;


    quoteName: string;
    CompanyName: string;
    AmountQuoted: string;
    JobType: string;
    JobDate: string;
    JobDetails: string;
    DeliveryAddress: string;

    constructor(private quotesService: QuotesService, private router: Router){}

  ngOnInit() {
      this.getQuotes();
  }

  getQuotes(): void {
    this.quotesService.getQuotes()
      .subscribe(quotes => {
        this.quotes = quotes;
      });
  }

  onSelect(quote: Quote): void {
    this.selectedQuote = quote;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedQuote._id]);
  }

  deleteQuote(id){
    var quotes = this.quotes;

    var isConfirm = confirm('Are you sure you want to delete');

    if (!isConfirm){
      return false;
    }
    else {
      this.quotesService.deleteQuote(id).subscribe(data => {
      if(data.n == 1){
        for(var i = 0; i < quotes.length; i++){
          if(quotes[i]._id == id){
            quotes.splice(i, 1);
          }
        }
      }
    });
    }
  }

}