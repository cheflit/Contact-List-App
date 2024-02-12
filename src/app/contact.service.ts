import { HttpClient } from '@angular/common/http'; // used to make REST API calls 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';

/* encapsulates access to the REST controller. Can be reused
    throughout the application
*/

/* @Injectable provides metadata that allows Angular to inject
    this service into a component as a dependecy
*/
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // base URL for all the CRUD REST APIs
  private baseURL = "http://localhost:8080/contacts";
  
  constructor(private httpClient: HttpClient) { }

  /* method to get list of contacts
      returns an Observable instance that holds array of Contact objects
      performs GET HTTP request to http://local.../contacts endpoint
  */
  public getContactsList(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(`${this.baseURL}`);
  }

  /* method to add a contact
      performs POST HTTP request to http://local.../contacts endpoint
  */
  public addContact(contact: Contact): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, contact);
  }

  /* method to add a contact
      performs DELETE HTTP request to http://local.../contacts/{id} endpoint
  */
      public deleteContact(id: number): Observable<Object> {
        return this.httpClient.delete(`${this.baseURL}/${id}`);
      }

}
