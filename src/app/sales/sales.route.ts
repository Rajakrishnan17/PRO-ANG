import {Routes} from '@angular/router';

import { OrderComponent } from './order/order.component';
import { SaleschartComponent } from './saleschart/saleschart.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ComplaintComponent } from './complaint/complaint.component';

export const appSalesRoutes: Routes = [
  {path: '', component: SaleschartComponent},
  {path: '*', component: SaleschartComponent},
  {path: 'dashbaord', component: SaleschartComponent},
  {path: 'order', component: OrderComponent},
  {path: 'invoice', component: InvoiceComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'complaint', component: ComplaintComponent}
];
