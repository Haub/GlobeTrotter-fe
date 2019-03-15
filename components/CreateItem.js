import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Form from './styles/Form'l
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
    const {name, value} = event.target;
    this.setState({ [name]: value})
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
        </fieldset>
        
      </Form>

    )
  }
}

export default CreateItem;