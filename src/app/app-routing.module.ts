import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {CreatePostComponent} from './create-post/create-post.component';
const routes: Routes = [
  {path:'', component: AppComponent},
  {path: 'create', component: CreatePostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
