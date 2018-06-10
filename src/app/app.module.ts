import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ChatComponent } from './chat/chat.component';
import { CrudproductComponent } from './crudproduct/crudproduct.component';
import {RouterModule,Routes} from '@angular/router';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './providers/auth.guard';
import {HttpModule} from '@angular/http';
import { InfoComponent } from './info/info.component';
import { AddressComponent } from './address/address.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { ChildguardService } from './providers/childguard.service';
import { DoublePipe } from './pipes/double.pipe';
import { CrudassetComponent } from './crudasset/crudasset.component';
import { AssetcrudComponent } from './assetcrud/assetcrud.component';
import { PowerPipe } from './pipes/power.pipe';
import { LimitPipe } from './pipes/limit.pipe';
import { FirstComponent } from './first/first.component';
import { CitiesComponent } from './cities/cities.component';
import { TestserviceComponent } from './services/testservice/testservice.component';
import { Testservice2Component } from './services/testservice2/testservice2.component';
// const myRoute : Routes = [
// {path : 'home',component:HomeComponent,canActivate : [AuthGuard]},
// {path : 'users',component:UsersComponent}

// ]

// const myRoute : Routes =[
//   {path : 'home',component : HomeComponent,canActivate : [AuthGuard]},
//   {path : 'users',component : UsersComponent},
//   {path : 'info/:id',component : InfoComponent,
//   canActivateChild : [ChildguardService],
// children : [
//   {path : 'addresses',component : AddressComponent},
//   {path : 'mobiles',component : MobilesComponent}
// ]
// }
// ]

const myRoute : Routes = [
  {path : '',redirectTo : '/login',pathMatch : 'full'},
{path : 'home',component:HomeComponent},
{path : 'login',component:LoginComponent,canActivate : [AuthGuard]}

]
@NgModule({
  declarations: [
    AppComponent,
    DoublePipe,
    LoginComponent,
    RegisterComponent,
    ChatComponent,
    CrudproductComponent,
    UsersComponent,
    HomeComponent,
    InfoComponent,
    AddressComponent,
    MobilesComponent,
    CrudassetComponent,
    AssetcrudComponent,
    PowerPipe,
    LimitPipe,
    FirstComponent,
    CitiesComponent,
    TestserviceComponent,
    Testservice2Component
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(myRoute)
    
  ],
  providers: [AuthGuard,ChildguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }









