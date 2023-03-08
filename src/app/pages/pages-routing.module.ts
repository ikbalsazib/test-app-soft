import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'service-details',
        loadChildren: () => import('./service-details/service-details.module').then(m => m.ServiceDetailsModule),
      },
      {
        path: 'portfolio',
        loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule),
      },
      {
        path: 'portfolio-details',
        loadChildren: () => import('./portfolio-details/portfolio-details.module').then(m => m.PortfolioDetailsModule),
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
      },
      {
        path: 'certificate-validation',
        loadChildren: () => import('./certificate-validation/certificate-validation.module').then(m => m.CertificateValidationModule),
      },
      {
        path: 'certificate-validation-detail',
        loadChildren: () => import('./certificate-validation-detail/certificate-validation-detail.module').then(m => m.CertificateValidationDetailModule),
      },
      {
        path: 'coming-soon',
        loadChildren: () => import('./coming-soon/coming-soon.module').then(m => m.ComingSoonModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PagesRoutingModule {
}
