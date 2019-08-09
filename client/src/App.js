import React from 'react';
import './App.css';
import FormikRegistrationForm from './components/RegistrationForm';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <FormikRegistrationForm/>
      </div>
    );
  };
}

export default App;
