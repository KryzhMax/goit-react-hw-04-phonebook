import React, { Component } from 'react';
import PropTypes from 'prop-types';

import s from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static defaultProps = {
    callback: () => {},
  };

  onFormChange = e => {
    // const value = e.target.value.trim();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onFormSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    this.props.callback(this.state);
    form.reset();
    // console.log(this.state);
  };

  render() {
    return (
      <>
        <form className={s.form} title="Name" onSubmit={this.onFormSubmit}>
          <input
            onChange={this.onFormChange}
            type="text"
            name="name"
            placeholder="Don Quixote"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <input
            onChange={this.onFormChange}
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
  }
}

ContactForm.propTypes = {
  callback: PropTypes.func.isRequired,
  title: PropTypes.string,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};
