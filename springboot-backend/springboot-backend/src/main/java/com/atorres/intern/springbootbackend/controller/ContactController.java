package com.atorres.intern.springbootbackend.controller;

import com.atorres.intern.springbootbackend.model.Contact;
import com.atorres.intern.springbootbackend.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/contacts")
public class ContactController {

    // inject ContactRepository
    @Autowired
    private ContactRepository contactRepository;

    // get all contacts
    @GetMapping//("/all")
    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }

    // add contact
    @PostMapping//("/add")
    // @RequestBody annotation maps the http request body to a domain object
    void addContact(@RequestBody Contact contact) {
        contactRepository.save(contact);
    }

    // delete contact rest api
    @DeleteMapping("/{id}")
    void deleteContact(@PathVariable Long id) {
        contactRepository.deleteById(id);
    }

}
