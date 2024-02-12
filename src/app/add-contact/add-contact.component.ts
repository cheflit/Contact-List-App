import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contact: Contact = new Contact();

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.saveContact();
  }

  /* Uses the contact service's addContact method to save 
      contact to database
  */
  saveContact() {
    this.contactService.addContact(this.contact).subscribe(data => {
      this.goToContactList();
    });
  }

  // Used to re-display the updated list of contacts once we persist a new one
  // uses router to go back to /contacts endpoint
  goToContactList() {
    this.router.navigate(['/contacts']);
  }

}
