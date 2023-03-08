import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificateValidationDetailComponent } from './certificate-validation-detail.component';

const routes: Routes = [
  {
    path: ':id',
    component: CertificateValidationDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertificateValidationDetailRoutingModule { }
