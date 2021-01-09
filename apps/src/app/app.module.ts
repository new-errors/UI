import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { AllStockComponent } from './component/all-stock/all-stock.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { StockComponent } from './pages/stock/stock.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AllStockComponent,
    PortfolioComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
