import React from 'react';
import styles from './Contact.module.css'

const Contact = ({ contact, onDeleteContact }) => {
    const handleDelete = () => {
      onDeleteContact(contact.id); 
    };
  
    return (
      <li className={styles.listItem}>
        <span className={styles.contactInfo}> {contact.name} <br /> 
        {contact.number}
        </span>  
        <button className={styles.button} onClick={handleDelete}>Delete</button>
      </li>
    );
  };
  
  export default Contact;