import React from 'react';
import GetData from './components/getData/getData';
import MyNavbar from './components/navbar/navbar';
import {
  Container,
} from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <MyNavbar />
        <Container>
        {/* <Table striped bordered hover> */}
          <GetData />
        {/* </Table> */}
        </Container>
      </Container>
    )
  }

}

export default App;