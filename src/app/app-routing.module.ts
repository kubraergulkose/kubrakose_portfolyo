import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ContactComponent } from './components/contact/contact.component';
import { WorksComponent } from './components/works/works.component';

const routes: Routes = [
  {path: '' , redirectTo: 'about', pathMatch: 'full'},
  {path: 'about' , component: AboutComponent},
  {path: 'works' , component: WorksComponent},
  {path: 'contact' , component: ContactComponent},
  {path: 'comments' , component: CommentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
