import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';

import { Todos } from './todos.js';

export const createTodo = new ValidatedMethod({
  name: 'todos.create',
  validate: new SimpleSchema({
    todo: String,
  }).validator(),
  run({ todo }) {

    if (this.isSimulation) {
      return { finished: false };
    }

    Todos.insert({ todo });
    return { finished: true };
  },
});
