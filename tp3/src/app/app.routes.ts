import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { GeneratepageComponent } from './generatepage/generatepage.component';
export const routes: Routes = [
    {
        component:HomePageComponent,
        path:"",
    },
    {
        component:GeneratepageComponent,
        path:"generate",
    },
];
