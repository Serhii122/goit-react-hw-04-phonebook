import React from 'react';
import PropTypes from 'prop-types';
import { ContactsItem } from './ContactItem.styled';

const ContactItem = ({ id, name, number, onDelete }) => (
  <ContactsItem key={id}>
    <p>
      <span>{name}</span>: {number}
    </p>
    <button type="button" onClick={() => onDelete(id)}>
      Delete
    </button>
  </ContactsItem>
);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
