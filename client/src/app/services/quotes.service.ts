import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuotesService {

basePath: string = "http://localhost:3000/api/";

    constructor(private http: Http){
        console.log('Quotes Service Initialized...');
    }

    getQuotes(){
    return this.http.get(this.basePath + "quotes")
        .map(res => res.json());
}

    addQuote(newQuote){   
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.basePath + 'quotes', JSON.stringify(newQuote), {headers: headers})
            .map(res => res.json());
    }

    getQuote(id){
        return this.http.get(this.basePath + "quotes/"+id)
        .map(res => res.json());
    }

    deleteQuote(id){
        return this.http.delete(this.basePath + "quotes/"+id)
        .map(res => res.json());
    }

    updateQuote(quote){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.basePath + 'quotes/'+quote._id, JSON.stringify(quote), {headers: headers})
            .map(res => res.json());
    }
}


