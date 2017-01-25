import { Routes } from '@angular/router';

import { QuoteComponent } from './components/quote.component';
import { CompanyComponent } from './components/company.component';
import { QuoteDetailComponent } from './components/quote-detail.component';
import { NewQuoteComponent } from './components/new-quote.component';

export const ROUTES: Routes = [

    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: 'quote',
        component: QuoteComponent
    },
    {
        path: 'company',
        component: CompanyComponent
    },
    {
        path: 'newquote',
        component: NewQuoteComponent 
    },
    {
        path: 'detail/:id',
        component: QuoteDetailComponent
    }


]