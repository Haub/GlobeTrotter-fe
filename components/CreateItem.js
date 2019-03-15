import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Form from './styles/Form';
import gql from 'graphql-tag';
import formatMoney from '../lib/formatMoney';


class CreateItem extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      description: '',
      image: '',
      largeImage: '',
      price: 0
    }
  }

  handleChange= (event) => {
    console.log(event);
    const {name, type, value} = event.target;
     const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  }

  render() {
    return(
      <Form>
        <fieldset>
          <label htmlFor='title'>
            <input 
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              required
              value={this.state.title}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor='price'>
            <input 
              type="number"
              id="price"
              name="price"
              placeholder="Price"
              required
              value={this.state.price}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor='description'>
            <input 
              type="text"
              id="description"
              name="description"
              placeholder="Description"
              required
              value={this.state.description}
              onChange={this.handleChange}
            />
          </label>
        </fieldset>
        
      </Form>

    )
  }
}

export default CreateItem;