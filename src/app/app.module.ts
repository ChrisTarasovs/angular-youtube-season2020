import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http/'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './layouts/default/default.component';
import { HeaderComponent } from './containers/header/header.component';
import { FooterComponent } from './containers/footer/footer.component';
import { SidebarComponent } from './containers/sidebar/sidebar.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CoreService } from './services/core.service';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { UserComponent } from './features/user/user.component';
import { EmployeesService } from './services/employees.service';

const SERVICES = [
  EmployeesService,
  CoreService
]
const COMPONENTS = [
  AppComponent,
  DefaultComponent,
  HeaderComponent,
  FooterComponent,
  SidebarComponent,
  NavigationComponent,
  DashboardComponent,
  UserComponent,
]
@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [...SERVICES],
  bootstrap: [AppComponent]
})
export class AppModule { }
