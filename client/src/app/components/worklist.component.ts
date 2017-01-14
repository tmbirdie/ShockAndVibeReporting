import { Component } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { Company } from '../models/company.model';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MdCard, MdToolbar, MdIconModule, MdButtonModule, MdListModule, MdInputModule, MdCheckboxModule } from '@angular/material';


@Component({
    selector: 'my-worklist',
    templateUrl: './worklist.component.html',
    styleUrls: ['./worklist.component.css']
})

export class WorklistComponent {
    
    companies: Company[];
    cName: string;
    cStreet: string;
    cCity: string;
    cState: string;
    cZip: string;
    cPhone: string;
    cEmail: string;

    constructor(private companyService: CompanyService){
    this.companyService.getCompanies()
      .subscribe(companies => {
        this.companies = companies;
      });
  }

  addCompany(event){
  event.preventDefault();
    var newCompany = {
      CompanyName: this.cName,
      CompanyStreet: this.cStreet,
      CompanyCity: this.cCity,
      CompanyState: this.cState,
      CompanyZip: this.cZip,
      CompanyPhone: this.cPhone,
      CompanyEmail: this.cEmail
    }
    this.companyService.addCompany(newCompany)
    .subscribe(company => {
      this.companies.push(company);
      this.cName = '';
      this.cStreet = '';
      this.cCity = '';
      this.cState = '';
      this.cZip = '';
      this.cPhone = '';
      this.cEmail = '';
    })
  }

  

}