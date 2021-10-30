import React from "react";
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

export const ContactList = ({contacts, onDeleteContact}) => {
    return (
        <ul>
            {contacts.map(({id, name, number}) => (
                <li key={id} className={s.item}>
                    {name}: {number}
                    <button 
                        type="button"
                        className={s.btn} 
                        onClick={() => onDeleteContact(id)}
                    >Delete</button>
                </li>
            ))}
        </ul>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onDeleteContact: PropTypes.func.isRequired,
};