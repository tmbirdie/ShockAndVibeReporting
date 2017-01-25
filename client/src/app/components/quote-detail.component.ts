import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company.model';
import { Quote } from '../models/quote.model';
import { QuotesService } from '../services/quotes.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MdCard, MdToolbar, MdIconModule, MdButtonModule, MdListModule, MdInputModule, MdCheckboxModule } from '@angular/material';


@Component({
    selector: 'quote-detail',
    templateUrl: './quote-detail.component.html',
    styleUrls: ['./quote-detail.component.css'],
    providers: [QuotesService]
})

export class QuoteDetailComponent {

    quotes: Quote[];

    quoteName: string;
    companyName: string;
    amountQuoted: string;
    jobType: string;
    jobDate: string;
    jobDetails: string;
    deliveryAddress: string;

    jobTypes = [
        {value: 'T1', viewValue: 'Type One'},
        {value: 'T2', viewValue: 'Type Two'},
        {value: 'T3', viewValue: 'Type Three'} 
    ];

    companies = [
        {value: 'CO1', viewValue: 'Company One'},
        {value: 'CO2', viewValue: 'Company Two'},
        {value: 'CO3', viewValue: 'Company Three'}
    ];

    constructor(private quotesService: QuotesService){
    this.quotesService.getQuotes()
      .subscribe(quotes => {
        this.quotes = quotes;
      });
  }

  ngOnInit() {
  }

  addQuote(event){
  event.preventDefault();
    var newQuote = { 
        QuoteName: this.quoteName,
        CompanyName: this.companyName,
        AmountQuoted: this.amountQuoted,
        JobType: this.jobType,
        JobDate: this.jobDate,
        JobDetails: this.jobDetails,
        DeliveryAddress: this.deliveryAddress
      
    }
    this.quotesService.addQuote(newQuote)
    .subscribe(quote => {
      this.quotes.push(quote);
      this.quoteName = '';
      this.companyName = '';
      this.amountQuoted = '';
      this.jobType = '';
      this.jobDate = '';
      this.jobDetails = '';
      this.deliveryAddress = '';
    })
  }

  

}