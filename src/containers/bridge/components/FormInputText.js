import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input } from 'antd';

class FormInputText extends Component {

  state={
    value: 0,
    type: null,
  };

  handleChange = (e) => {
    const isNumber = this.props.type === 'amount';
    const value = e.target.value;
    const isNumberInvalid = isNaN(value);
    let responseObject = {};
    if (isNumber && !isNumberInvalid) {
      responseObject.data = value;
      responseObject.error = null;
      responseObject.type = this.props.type;
      this.setState({value: e.target.value})
    } else if (isNumber && isNumberInvalid) {
      responseObject.data = value;
      responseObject.error = 'Invalid value for Ether amount'; 
      responseObject.type = this.props.type;
    }
    this.props.returnValue(responseObject);
  }

  render() {
    const { placeholderText } = this.props;
    return (
      <div>
        <Input disabled={this.props.isDisabled} value={this.props.resetField ? 0 : this.state.value} placeholder={placeholderText} onChange={this.handleChange}/>       
      </div>
    );
  }
}

export default FormInputText;