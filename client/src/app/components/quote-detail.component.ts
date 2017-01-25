import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Company } from '../models/company.model';
import { Quote } from '../models/quote.model';
import { QuotesService } from '../services/quotes.service';


@Component({
    selector: 'quote-detail',
    templateUrl: './quote-detail.component.html',
    styleUrls: ['./quote-detail.component.css'],
    providers: [QuotesService]
})

export class QuoteDetailComponent {

    @Input()
    quote: Quote;    

    constructor(
        private quotesService: QuotesService,
        private route: ActivatedRoute,
        private location: Location
    ){}

  ngOnInit(): void {
      this.route.params
        .switchMap((params: Params) => this.quotesService.getQuote(params['id']))
        .subscribe(quote => this.quote = quote);
  }

  save(quote) {
    var _quote = {
      _id: quote._id,
      QuoteName: quote.QuoteName,
      CompanyName: quote.CompanyName
    };
    this.quotesService.updateQuote(_quote).subscribe(data => {
        quote = _quote;
        
    });
    this.goBack();
  }


  goBack(): void {
    this.location.back();
  }

}