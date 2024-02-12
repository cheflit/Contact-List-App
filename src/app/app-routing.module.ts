import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactService } from './contact.service';

// routes are defined here
const routes: Routes = [
  // when we enter an empty path in the browser we'll be redirected to /contacts
  // which has the component ContactListComponent
  {path: 'contacts', component: ContactListComponent},
  {path: '', redirectTo: 'contacts', pathMatch: 'full'},
  {path: 'add-contact', component: AddContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
