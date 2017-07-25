import React, { Component } from 'react';
import Form from './Form';
import { connect } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'






class App extends Component {
  render() {
    return (
      <div style={{margin:'50px 0 0 50px'}}>
        <Form />
        {this.props.form &&
          <span>{JSON.stringify(this.props.form)}</span>
        }
      </div>
    )
  }
}


export default connect(
  (state)=>{
    return {
      form: (state.form.test && state.form.test.values) ? state.form.test.values : false
    };
  }
)(App);
