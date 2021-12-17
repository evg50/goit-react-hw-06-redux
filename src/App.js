import React, { Component } from "react";
import "./App.css";

import { nanoid } from "nanoid";
import FormInput from "./components/FormInput";
import Filter from "./components/Filter"
import Contacts from "./components/Contacts";



class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    };
  componentDidUpdate(prevProps,prevState) {
    console.log('App componentDidUpdate');
    const nextContact = this.state.contacts;
    const prevContact = prevState.contacts;
    if  (nextContact !== prevContact) {
      console.log(nextContact, prevContact);
      console.log("Обновился массив контактов");
      localStorage.setItem('contacts', JSON.stringify(nextContact));
    }
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState ({contacts:parsedContacts})
     }
  }

  formSubmitHandler = (newContact) => {
    newContact.id = nanoid();
  
    let check = true;
    this.state.contacts.map(contact=> {if (contact.name === newContact.name){

      alert(`${newContact.name} is already in contacs.` );
      check = false;
    }} ) ;
    
     if (check) {
      this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }))}
  };

  filterHandler = (e) => {
    // console.log(e)
    const {name , value} = e.currentTarget;
    this.setState({ [name]: value });
    }
  filterVisible =() => {
    const { filter, contacts } = this.state
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
}
  deleteContact =(e) => {
    console.log("delete", e)
    this.setState( prevState => ({
      contacts:prevState.contacts.filter(contact=>contact.id !== e)
    }))
  }
    
  
  render() {
    return (
      <div>
        
        <p className="title">Phonebook</p>;
        <FormInput onSubmit={this.formSubmitHandler} />
        <p className="title">Contacts</p>;
        
        <Filter valueFilter={this.state.filter} onChange={this.filterHandler}/>
        <Contacts contactsList={this.filterVisible()} onDeleteContact={this.deleteContact} />
      </div>
    );
  }
}
export default App;

