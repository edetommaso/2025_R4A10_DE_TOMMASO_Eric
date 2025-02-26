import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { GeneratepageComponent } from './generatepage/generatepage.component';
import { SingleTravelPageComponent } from './single-travel-page/single-travel.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
export const routes: Routes = [
    {
        component:HomePageComponent,
        path:"home",
    },
    {
        component:GeneratepageComponent,
        path:"generate",
    },
    {
        component:SingleTravelPageComponent,
        path:"voyage/:id"
    },
    { path: "404", component: NotFoundPageComponent },
    { path: "**", redirectTo: "/404" }
];
