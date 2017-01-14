import { Component } from '@angular/core';
import { CompanyService } from './services/company.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CompanyService]
})
export class AppComponent {
  title = 'New Blank App Starter Template with Material';
}
