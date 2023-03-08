import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NumberMinDigitPipe} from './number-min-digit.pipe';
import {SecToTimePipe} from './sec-to-time.pipe';
import { SafeHtmlCustomPipe } from './safe-html.pipe';
import { SortPipe } from './sort.pipe';


@NgModule({
  declarations: [
    NumberMinDigitPipe,
    SecToTimePipe,
    SafeHtmlCustomPipe,
    SortPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NumberMinDigitPipe,
    SecToTimePipe,
    SafeHtmlCustomPipe,
    SortPipe
  ]
})
export class PipesModule {
}
