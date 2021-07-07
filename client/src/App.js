import React from 'react';
import axios from 'axios';
import './App.css';
import FormikRegistrationForm from './components/RegistrationForm';
import Data from './components/Data.js'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/restricted/data')
      .then(res => {
        this.setState({
          data: res.data
        })
      })
      .catch(err => console.log(err.response));

  }

  render() {
    return (
      <div className="App">
        <FormikRegistrationForm/>
        <Data data={this.state.data} />
      </div>
    );
  };
}

export default App;
