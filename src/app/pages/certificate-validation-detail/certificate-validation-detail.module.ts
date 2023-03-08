import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificateValidationDetailRoutingModule } from './certificate-validation-detail-routing.module';
import { CertificateValidationDetailComponent } from './certificate-validation-detail.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    CertificateValidationDetailComponent
  ],
  imports: [
    CommonModule,
    CertificateValidationDetailRoutingModule,
    NgxSpinnerModule
  ]
})
export class CertificateValidationDetailModule { }
