import React from 'react';
import { connect } from 'react-redux';

import {Container, Row, Col} from 'reactstrap';

class App extends React.Component{
   constructor(props) {
      super(props);	
	  
	  //this.props.addStore('new_data_store');  
   }
   
   render(){
     return (
         <Container>
		  <Row>
		    <Col xs="6">
			 test1
			</Col>
			<Col xs="6">
			 test2
			</Col>
		  </Row>
		</Container>
   )}
}

export default connect(
  state => ({ store: state }),
  dispatch => ({	  
    addStore: ( newData ) => {
      dispatch({ type: 'ADD_STORE', data: newData})
    }
  })
)(App);