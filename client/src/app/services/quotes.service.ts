import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Quote } from '../models/quote.model';

@Injectable()
export class QuotesService {

basePath: string = "http://localhost:3000/api/";

private quotesUrl = 'http://localhost:3000/api/quotes';  // URL to web api
private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http){
        console.log('Quotes Service Initialized...');
    }

    getQuotes(){
    return this.http.get(this.basePath + "quotes")
        .map(res => res.json());
}

    addQuote(newQuote){   
        // var headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        return this.http.post(this.basePath + 'quotes', JSON.stringify(newQuote), {headers: this.headers})
            .map(res => res.json());
    }

    // getQuote(id: string): Promise<Quote> {
    // const url = `${this.quotesUrl}/${id}`;
    // return this.http.get(url)
    //     .toPromise()
    //     .then(response => response.json().data as Quote)
    //     .catch(this.handleError);
    // }

    getQuote(id){
        return this.http.get(this.basePath + "quotes/"+id)
        .map(res => res.json());
    }

    deleteQuote(id){
        return this.http.delete(this.basePath + "quotes/"+id)
        .map(res => res.json());
    }

    // updateQuote(quote: Quote): Promise<Quote> {
    //     const url = `${this.quotesUrl}/${quote._id}`;
    //     return this.http
    //         .put(url, JSON.stringify(quote), {headers: this.headers})
    //         .toPromise()
    //         .then(() => quote)
    //         .catch(this.handleError);
    // }

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for dev purposes only
    return Promise.reject(error.message || error);
  }

    updateQuote(quote) : Observable<Quote>{
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.basePath + 'quotes/'+quote._id, JSON.stringify(quote), {headers: headers})
            .map(res => res.json());
    }
}


