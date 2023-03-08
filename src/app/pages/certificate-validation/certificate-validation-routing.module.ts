import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificateValidationComponent } from './certificate-validation.component';

const routes: Routes = [{
  path:'',
  component:CertificateValidationComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertificateValidationRoutingModule { }
