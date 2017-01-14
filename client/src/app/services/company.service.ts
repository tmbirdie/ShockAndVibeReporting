import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CompanyService {

basePath: string = "http://localhost:3000/api/";

    constructor(private http: Http){
        console.log('Company Service Initialized...');
    }

    getCompanies(){
    return this.http.get(this.basePath + "company")
        .map(res => res.json());
}

    addCompany(newCompany){   
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.basePath + 'company', JSON.stringify(newCompany), {headers: headers})
            .map(res => res.json());
    }
}

