// import { HomeComponent } from '../Home/CustomerApp.HomeComponent';

import { WelcomeComponentNew } from '../Home/WelcomePage/App.WelcomeComponent';

export const MainRoutes = [
    // {path: 'Home', component: HomeComponent },
    // {path: 'Customer', loadChildren: () => import('../Customer/CustomerApp.CustomerModule').then(mod => mod.CustomerModule)},
    // {path: 'Supplier', loadChildren: () => import('../Supplier/CustomerApp.SupplierModule').then(mod => mod.SupplierModule)},
    // {path: '', component: HomeComponent }
    {path: 'feedback', loadChildren: () => import('../Feedback/App.FeedbackModule').then(mod => mod.AppFeedbackModule)},
    {path: 'details', loadChildren: () => import('../DetailedStatus/App.DetailsModule').then(mod => mod.AppDetailsModule)},
    {path: 'developers', loadChildren: () => import('../AboutUs/App.DevelopersModule').then(mod => mod.AppDevelopersModule)},
    {path: '', component: WelcomeComponentNew }
]