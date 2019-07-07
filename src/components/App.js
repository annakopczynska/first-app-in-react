import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Result from './Result';

const apiKey = "a40670d736101c6436c8072da0af79fa"
class App extends Component {
  state = {
    value: "",
    date: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    city: "",
    err: false,
  }

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    })
  }


  componentDidUpdate(prevState) {
    if (this.state.value.length !== 0) {
      if (prevState.value !== this.state.value) {
        const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${apiKey}&units=metric`

        fetch(API)
          .then(response => {
            if (response.ok) {
              return response
            }
            throw Error("Nie znajduję miasta")
          })
          .then(response => response.json())
          .then(data => {
            const time = new Date().toLocaleString();
            this.setState(prevState => ({
              err: false,
              date: time,
              sunrise: data.sys.sunrise,
              sunset: data.sys.sunset,
              temp: data.main.temp,
              pressure: data.main.pressure,
              wind: data.wind.speed,
              city: prevState.value,
            }))
          })
          .catch(err => {
            this.setState(prevState => ({
              err: true,
              city: prevState.value,
            }))
          })
      }
    }
  }


  render() {
    return (
      <div className="wrap">
        <Form value={this.state.value} change={this.handleInputChange} />
        <Result weather={this.state} />
      </div>
    );
  }
}
export default App;
