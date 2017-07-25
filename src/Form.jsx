import React, { Component } from 'react';
import { Input, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form'





const TextInput = props => (
  <Input
     icon={props.label}
     iconPosition='left'
     placeholder={props.label}
     onChange={ (e) => {
                    props.input.onChange(e.target.value)
                }}
   >
   </Input>
)


class Form extends Component {

  handleClick = (e) => {
    e.preventDefault();
  }


  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <Field name="users" component={TextInput} label="users"/>
        <br/>
        <Field name="mail" component={TextInput} label="mail"/>
        <br/>
        <Field name="key" component={TextInput} label="key"/>
        <br/>
        <Button color="green" onClick={this.handleClick}>submit</Button>
      </form>
    )
  }
}


export default reduxForm({
  form: 'test'
})(Form);
