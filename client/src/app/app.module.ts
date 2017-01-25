import { ROUTES } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'
import { HttpModule } from '@angular/http';
import { RouterModule, NoPreloading } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { Md2Module } from 'md2/module';
import { MdButtonModule } from '@angular/material';
import { FileUploadModule } from 'ng2-file-upload';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuillModule } from 'ngx-quill/src/quill.module';


import 'hammerjs';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { QuoteComponent } from './components/quote.component';
import { CompanyComponent } from './components/company.component';
import { QuoteDetailComponent } from './components/quote-detail.component';
import { NewQuoteComponent } from './components/new-quote.component';


@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    CompanyComponent,
    QuoteDetailComponent,
    NewQuoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(ROUTES, {useHash: true, preloadingStrategy: NoPreloading}),
    Md2Module.forRoot(),
    FileUploadModule,
    FlexLayoutModule,
    QuillModule,
    // NgbModule.forRoot(),
    MdButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
