import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrderComponent, InvoiceComponent, ComplaintComponent, FeedbackComponent]
})
export class SalesModule { }
