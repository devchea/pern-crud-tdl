import React, { Fragment } from "react"
import './App.css';
import InputTodo from './components/InputTodo'
import ListTodo from './components/ListTodo'

function App() {
// const person = {
// firstName: 'John',
// lastName: 'Smith',
// birthDate: '3/12/1950'
// }
//using the same person info we can apply destructuring
// const { firstName, lastName, birthDate } = person
//output below
// const {
//   firstName = "Richard",
//   lastName = "Chea",
//   birthDate = "5/11/1910",
// } = person;

// console.log('firstName:', firstName);
// console.log('lastName:', lastName);
// console.log('birthDate:', birthDate);


  return (
    <Fragment>
      <div className='container'>
      <InputTodo/>
      <ListTodo/>
      </div>
    </Fragment>
  );
}

export default App;
