import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { AnalysisComponent } from './components/analysis/analysis.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ChartsComponent } from './components/charts/charts.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ReportsComponent } from './components/reports/reports.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'file-upload', component: FileUploadComponent },
  { path: 'report', component: ReportsComponent },
  { path: 'analysis', component: AnalysisComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'user-data', component: UserDataComponent },
  { path: 'customer', component: CustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
