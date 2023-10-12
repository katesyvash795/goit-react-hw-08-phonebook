import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contact-filter/operation';
import { List, ListItem, DeleteButton } from './ContactsList.styled';
import { getContacts, getFilters } from 'redux/contact-filter/selectors';

function ContactList() {
  const contacts = useSelector(getContacts);
  const filters = useSelector(getFilters);
  const dispatch = useDispatch();

const filteredContacts = contacts.filter((contact) =>
  contact.name.toLowerCase().includes(filters.toLowerCase())
);


  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId));
  };
  return (
    <List>
      {filteredContacts.map((contact) => (
        <ListItem key={contact.id}>
          <div>
            <b>{contact.name}:</b> {contact.number}
          </div>
          <DeleteButton onClick={() => handleDelete(contact.id)}>
            Delete
          </DeleteButton>
        </ListItem>
      ))}
    </List>
  );
}

export default ContactList;
