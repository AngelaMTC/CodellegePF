import { Routes } from '@angular/router';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';

export const routes: Routes = [
    {path: 'users', component: UsersComponent},
    {path: 'signUp', component: SignUpComponent},
    {path: 'user/:id', component: UserComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
]