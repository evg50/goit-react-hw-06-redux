import React from "react";

export default function Contacts({ contactsList, onDeleteContact }) {
  // console.log("massiv", contactsList);
  return (
    <ul>
      {contactsList.map((contact) => (
        <li key={contact.id} className="contact">
          {contact.name}: {contact.number}
          <button 
          onClick={()=> onDeleteContact(contact.id)}
          type="button" 
          className="deleteButton">удалить</button>
        </li>
      ))}
    </ul>
  );
}
