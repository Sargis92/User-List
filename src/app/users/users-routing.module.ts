import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: ':id', component: UserPostsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
