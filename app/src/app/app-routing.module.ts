import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OwnerMenuComponent } from './owner/owner-menu/owner-menu.component';
import { OwnerMiscComponent } from './owner/owner-misc/owner-misc.component';


const routes: Routes = [
  {path:'edit-menu',component:OwnerMenuComponent},
  {path:'edit-misc', component:OwnerMiscComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
