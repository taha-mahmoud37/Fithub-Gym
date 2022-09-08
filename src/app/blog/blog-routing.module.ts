import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogGridComponent } from './blog-grid/blog-grid.component';
import { BlogListComponent } from './blog-list/blog-list.component';

const routes: Routes = [
  {path: '' , component: BlogGridComponent},
  {path: 'blogGrid' , component: BlogGridComponent},
  {path: 'blogList' , component: BlogListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
