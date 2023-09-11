import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FetchedUserComponent } from './fetched-user/fetched-user.component';
import { SavedUserComponent } from './saved-user/saved-user.component';

const routes: Routes = [
  {path: '', component: FetchedUserComponent},
  {path: 'saved', component: SavedUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
