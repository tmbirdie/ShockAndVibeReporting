import { Component } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { Company } from '../models/company.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MdCard, MdToolbar, MdIconModule, MdButtonModule, MdListModule, MdInputModule, MdCheckboxModule } from '@angular/material';


@Component({
    selector: 'company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.css'],
    providers: [CompanyService]
})

export class CompanyComponent {

  onSubmit({ value, valid } : { value: Company, valid: boolean }){
    console.log(value, valid);
  }

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

  hasStateError = false;

  validateState(value){
    if (this.cState === "default")
      this.hasStateError = true;
    else
      this.hasStateError = false;
  }

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




}