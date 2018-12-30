import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { appSalesRoutes} from './sales.route';

import { OrderComponent } from './order/order.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SaleschartComponent } from './saleschart/saleschart.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      appSalesRoutes
    )
  ],

  declarations: [
    OrderComponent,
    InvoiceComponent,
    ComplaintComponent,
    FeedbackComponent,
    SaleschartComponent
  ]
})
export class SalesModule { }
