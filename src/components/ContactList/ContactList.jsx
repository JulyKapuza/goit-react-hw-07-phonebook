import React from 'react';
import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';
import { getFilterValue, getContacts } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOperation';
import { useEffect } from 'react';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filterValue = useSelector(getFilterValue);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );

  return (
    <>
      {contacts.length > 0 && (
        <ul className={css.contactList}>
          {visibleContacts.map(({ id, name, phone }) => (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={phone}
            ></ContactItem>
          ))}
        </ul>
      )}
    </>
  );
}
