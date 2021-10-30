import { Component } from 'react';
import s from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  }

  handleChange = evt => {
    const {name, value} = evt.currentTarget;
    this.setState({[name]: value});
};

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({name: '', number: ''});
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label}>
            Name
            <input 
                type="text" 
                name="name" 
                className={s.input}
                value={this.state.name}
                onChange={this.handleChange}
            />
        </label>
        <label className={s.label}>
            Number
            <input 
                type="text" 
                name="number" 
                className={s.input}
                value={this.state.number}
                onChange={this.handleChange}
            />
        </label>
        <button type="submit" className={s.btn}>Add contact</button>
      </form>
    );
  }
}