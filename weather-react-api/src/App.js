import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import "./App.css";

import { Parallax } from "react-materialize";

const API_KEY = "ab0b108e77f9b01114077a2ef79927e4";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };
  getWeather = async e => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}
&units=imperial`);
    const data = await api_call.json();

    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter location"
      });
    }
  };

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
        <Parallax
          className="pic1"
          imageSrc="https://wallpapercave.com/wp/D3r6gVH.jpg"
        />
        <div className="section white">
          <div className="row container">
            <h4 className="header">
              "The taller the weeds during the summer, the deeper the snow in
              the winter"
            </h4>
          </div>
        </div>
        <Parallax
          className="pic2"
          imageSrc="https://www.healthline.com/hlcmsresource/images/News/070816_hotweather_THUMB_LARGE.jpg"
        />
        <div className="section white">
          <div className="row container">
            <h4 className="header">
              "Red sky at night, shepherd's delight. Red sky in the morning,
              shepherd's warning"
            </h4>
          </div>
        </div>
        <Parallax
          className="pic3"
          imageSrc="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        />
        <div className="section white">
          <div className="row container">
            <h4 className="header">
              "There are no rules of architecture for a castle in the clouds" 
            </h4>
            <p>-Gilbert K. Chesterton</p>
          </div>
        </div>
        <Parallax
          className="pic4"
          imageSrc="https://cdn.thecrazytourist.com/wp-content/uploads/2017/10/ccimage-shutterstock_37633855.jpg"
        />
        <div className="section white">
          <div className="row container">
            <h4 className="header">
              "Life is like the ocean, it can be calm or still, and rough or rigid, but in the end, it is always beautiful"
            </h4>
          </div>
        </div>
        <div className="section black blkFoot">
          <div className="row container">
            <p className="header">
            <i className="fa fa-copyright" aria-hidden="true">2019 Brian Madeira</i>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
