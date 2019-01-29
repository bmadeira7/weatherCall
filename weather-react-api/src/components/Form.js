import React from "react";
import { Button, Icon } from "react-materialize"
import '../App.css';
class Form extends React.Component {
  render() {
    return (
      <form className="get-input-form" onSubmit={this.props.getWeather}>
          <input type="text" name="city" placeholder="City"/>
          <input type="text" name="country" placeholder="Country"/>
          <Button className="get-weather-btn" waves='light'>get weather<Icon right>cloud</Icon></Button>
      </form>
    );
  }
}
export default Form;