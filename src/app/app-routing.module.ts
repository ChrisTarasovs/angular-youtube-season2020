import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { UserComponent } from './features/user/user.component';
import { DefaultComponent } from './layouts/default/default.component';
import { PostComponent } from './features/post/post.component';

const routes: Routes = [
  {
    path: '', 
    component: DefaultComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'post/:id',
        component: PostComponent
      },
      {
        path: 'profile',
        component: UserComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
