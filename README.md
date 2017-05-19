# This repo was created to ask a question on Stack Overflow
*http://stackoverflow.com/q/44066475/8035683*

**Here is the question I asked:**

I am using Meteor. As you can see in the README of ValidatedMethod on Github, it is using the returnStubValue option when calling a method, but it doesn't seem to work for me. I would like to know what you think about it.

I upload a simple Meteor project that reproduce the problem on Github : 

Here is my server side method:

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

This a simple method that insert a todo in a todos collection. On the client side I immediately return an object `{ finished: false }`. On the server side I update my database then return an object `{ finished: true }`

Here is my client side method call:

    createTodo.call({ todo }, (err, res) => {
      console.log(res);
    });

I just call the method and console.log the result. **Because I am using mdg:validated-method** which uses the `returnStubValue` option, I guess my console should output `finished: false`, then `finished: true`. But it actually only output `finished: true`.

![console log](https://img4.hostingpics.net/pics/798695log.jpg "Console log")

Is there something I don't understand here?
