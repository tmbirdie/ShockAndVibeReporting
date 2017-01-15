import { Component } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { Company } from '../models/company.model';
import { FormControl } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MdCard, MdToolbar, MdIconModule, MdButtonModule, MdListModule, MdInputModule, MdCheckboxModule } from '@angular/material';


@Component({
    selector: 'my-worklist',
    templateUrl: './worklist.component.html',
    styleUrls: ['./worklist.component.css']
})

export class WorklistComponent {

  title: string = "Company List";
    
    companies: Company[];
    id: string;
    cName: string;
    cStreet: string;
    cCity: string;
    cState: string;
    cZip: string;
    cPhone: string;
    cEmail: string;

    states = [
    {value: 'CA', viewValue: 'CA'},
    {value: 'CO', viewValue: 'CO'},
    {value: 'TX', viewValue: 'TX'}
  ];

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

  deleteCompany(id){
    var companies = this.companies;

    var isConfirm = confirm('Are you sure you want to delete');

    if (!isConfirm){
      return false;
    }
    else {
      this.companyService.deleteCompany(id).subscribe(data => {
      if(data.n == 1){
        for(var i = 0; i < companies.length; i++){
          if(companies[i]._id == id){
            companies.splice(i, 1);
          }
        }
      }
    });
    }
  }


updateCompany(company){
    var _company = {
      _id: company._id,
      CompanyName: company.CompanyName,
      CompanyEmail: 'company@CompanyEmail.com'
    };

    this.companyService.updateCompany(_company).subscribe(data => {
      company.CompanyEmail = 'company@CompanyEmail.com';
   })
  }

}