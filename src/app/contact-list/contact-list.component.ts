import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[] = [];

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.getContacts();
  }

  /* Uses the contact service's getContactList method to get 
      what's been persisted in the database and stores them in contacts
  */
  private getContacts() {
    this.contactService.getContactsList().subscribe(data => {
      this.contacts = data;
    });
  }

  /* Uses the contact service's deleteContact method to delete 
      a contact using the id
  */
  deleteContact(id: number) {
    this.contactService.deleteContact(id).subscribe(data => {
      console.log(data);
      this.getContacts();
    });
  }

}
