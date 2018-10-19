import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HomeComponent } from './modules/home/home.component';

const appRoutes: Routes = [
    {path:"",
    redirectTo:"/Home",
    pathMatch:"full"},
    {path:"Home",component:DashboardComponent,
    children:[
        {path:"",component:HomeComponent}
    ]},
    {path:"**",redirectTo:"/Home"}
]
@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes),
    ]
})
export class AppRoutingModule{

}