import React, { Component } from "react";
import { nanoid } from "nanoid";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  nameInputId = nanoid();
  telInputId = nanoid();

  submitForm = (e) => {
    e.preventDefault();

    // this.state.contacts.push(this.state.name);
    // console.log("submit", this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  NameChange = (event) => {
    const { name, value } = event.currentTarget;
    // console.log(value);
    // console.log(name);
    this.setState({ [name]: value });
    // console.log("input ", this.state);
  };

  render() {
    return (
      <form action="" className="formInput" onSubmit={this.submitForm}>
        <label htmlFor={this.nameInputId}>
          <p className="formInputTitle">Name</p>

          <input
            id={this.nameInputId}
            name="name"
            className="inputField"
            type="text"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.NameChange}
          />
        </label>
        <label htmlFor={this.telInputId}></label>
        <p className="formInputTitle">Number</p>
        <input
          id={this.telInputId}
          type="tel"
          className="inputField"
          name="number"
          value={this.state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={this.NameChange}
        />

        <button className="submitButton">Add contacts</button>
      </form>
    );
  }
}

export default Form;
