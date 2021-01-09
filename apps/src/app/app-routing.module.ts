import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent} from './component/nav-bar/nav-bar.component';
import { AllStockComponent} from './component/all-stock/all-stock.component';
import { StockComponent} from './pages/stock/stock.component';
import { PortfolioComponent} from './pages/portfolio/portfolio.component';

const routes: Routes = [
  {path: 'nav-bar', component: NavBarComponent},
  {path: 'all-stock', component: AllStockComponent},
  {path: 'stock', component: StockComponent},
  {path: 'portfolio', component: PortfolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
