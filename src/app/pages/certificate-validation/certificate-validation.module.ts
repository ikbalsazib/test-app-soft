import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificateValidationRoutingModule } from './certificate-validation-routing.module';
import { CertificateValidationComponent } from './certificate-validation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CertificateValidationComponent
  ],
  imports: [
    CommonModule,
    CertificateValidationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CertificateValidationModule { }
