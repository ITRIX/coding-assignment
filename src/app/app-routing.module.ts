import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyConvertComponent } from './pages/component/currency-convert/currency-convert.component';


const routes: Routes = [
  {
    path: '',
    component: CurrencyConvertComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
