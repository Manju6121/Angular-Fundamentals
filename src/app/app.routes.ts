import { Routes } from '@angular/router';
import { Home } from './Component/home/home';
import { About } from './Component/about/about';
import { Contact } from './Component/contact/contact';


export const routes: Routes = [
    {path:'',component:Home},
    {path:'home',component:Home},
    {path:'about',component:About},
    {path:'contact',component:Contact}
];
