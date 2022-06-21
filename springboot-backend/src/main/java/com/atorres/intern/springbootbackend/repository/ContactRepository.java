package com.atorres.intern.springbootbackend.repository;

import com.atorres.intern.springbootbackend.model.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/*  extends JpaRepository exposes database CRUD methods (save, findById, etc)
    & provides out-of-box implementation for those methods
    Tell it the class <Contact> & primary key type <Long>
*/
@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {
}
