import React from 'react';
import LoreamIpsum from 'lorem-ipsum';

import { createTodo } from '../../api/methods';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.create = this.create.bind(this);
  }

  create() {
    const todo = LoreamIpsum({ count: 1 });
    createTodo.call({ todo }, (err, res) => {
      console.log(res);
    });
  }

  render() {
    return (
      <div>
        <p>Hello World!</p>
        <button type="button" onClick={this.create}>Add a random todo</button>
      </div>
    );
  }
}
