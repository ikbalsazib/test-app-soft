import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    preloadingStrategy: PreloadAllModules,
    // initialNavigation: 'enabled',
    anchorScrolling: 'enabled'
  })],
  providers: [],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
