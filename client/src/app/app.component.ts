import { Component } from '@angular/core';
import { CompanyService } from './services/company.service';
import { MdCard, MdIconModule, MdButtonModule, MdListModule, MdInputModule, MdCheckboxModule } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CompanyService]
})
export class AppComponent {
  title = 'New Blank App Starter Template with Material';
}
