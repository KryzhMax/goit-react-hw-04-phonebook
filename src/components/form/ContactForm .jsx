import React, { useState } from "react";
import PropTypes from "prop-types";

import s from "./ContactForm.module.css";

export const ContactForm = ({ callback }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  // static defaultProps = {
  //   callback: () => {},
  // };

  // ??????
  const onFormChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;

      default:
        break;
    }
    // const { name, value } = e.target;
    // this.setState({ [name]: value });
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    // ?????????
    callback({ name, number });
    form.reset();
    // console.log(this.state);
  };
  return (
    <>
      <form className={s.form} title="Name" onSubmit={onFormSubmit}>
        <input
          onChange={onFormChange}
          type="text"
          name="name"
          placeholder="Don Quixote"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <input
          onChange={onFormChange}
          type="tel"
          name="number"
          placeholder="+38(033)-11-22"
          required
        />
        <button className={s.formButton} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

ContactForm.propTypes = {
  callback: PropTypes.func.isRequired,
  title: PropTypes.string,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};
