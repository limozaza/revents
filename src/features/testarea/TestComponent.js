import React, { Component } from 'react';
import {connect} from 'react-redux';
import { incrementCounter, decrementCounter } from './testActions';

import {Button} from 'semantic-ui-react'



class TestComponent extends Component {
  render() {
    return (
      <div>
          <h1>TestComponent</h1>
          <p>{this.props.data}</p>
          <Button onClick={this.props.incrementCounter} color="green" content='Increment'/>
          <Button onClick={this.props.decrementCounter} color="red" content='Decrement'/>
      </div>
    );
  }
}

const mapStateToProps = (state)=> ({
    data: state.test.data
})

const mapDispatchToProps = {
  incrementCounter,
  decrementCounter
}

export default connect(mapStateToProps,mapDispatchToProps)(TestComponent);
