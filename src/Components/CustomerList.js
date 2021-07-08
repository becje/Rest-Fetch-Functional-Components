import React from "react";

export default class NewCustomerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      level: "",
      address: {
        street: "",
        city: "",
        state: "",
        zip: "",
      },
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleLevelChange = this.handleLevelChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleFirstNameChange(e) {
    this.setState({ firstNameValue: e.target.value });
  }

  handleLastNameChange(e) {
    this.setState({ lastNameValue: e.target.value });
  }

  handleLevelChange(e) {
    this.setState({ levelValue: e.target.value });
  }

  handleAddressChange(e) {
    this.props.addNewAddress(e, this.props.data, {
      street: this.state.streetValue,
      city: this.state.cityValue,
      state: this.state.stateValue,
      zip: this.zip.zipValue,
    });
  }

  handleClick(e) {
    this.props.addNewCustomer(e, this.props.data, {
      firstName: this.state.firstNameValue,
      lastName: this.state.lastNameValue,
      level: this.state.levelValue,
      address: {
        street: this.state.streetValue,
        city: this.state.cityValue,
        state: this.state.stateValue,
        zip: this.state.zipValue,
      },
    });
    this.setState({
      firstNameValue: "",
      lastNameValue: "",
      levelValue: "",
      streetValue: "",
      cityValue: "",
      stateValue: "",
      zipValue: "",
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="First Name"
          onChange={this.handleFirstNameChange}
          value={this.state.firstNameValue}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={this.handleLastNameChange}
          value={this.state.lastNameValue}
        />
        <form>
          <label for="Level">Select a Customer Level</label>
          <select id="Level" name="Level">
            <option levelValue="PLATINUM">PLATINUM</option>
            <option levelValue="DIAMOND">DIAMOND</option>
            <option levelValue="GOLD">GOLD</option>
            <option levelValue="SILVER">SILVER</option>
          </select>
        </form>

        <form>
          <label for="Address">Fill in the Customers Address</label>
          <select id="Address" name="Address">
            <option streetValue="Street">Street</option>
            <option cityValue="City">City</option>
            <option stateValue="State">State</option>
            <option zipValue="Zip">Zip Code</option>
          </select>
        </form>
        <button onClick={this.handleClick}>Add Customer</button>
      </div>
    );
  }
}
/*** Convert Forms or this page to CustomerFormModal.js ***/
/*** Figure out how to add "Level" form or adjust accordingly when transition form to modal  

 onChange={this.handleLevelChange}
 value={this.state.levelValue}  Yes I know this line is wrong 

 onChange={this.handleAddressChange}  Yes I know this line is wrong 
 value={this.state.addressValue}  Yes I know this line is wrong ***/
