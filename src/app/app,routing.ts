import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/home.component";
import { UserComponent } from "app/user/user.component";

const APP_ROUTES : Routes = [
    {path:'',component:HomeComponent},
    {path:'user/:id',component:UserComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);