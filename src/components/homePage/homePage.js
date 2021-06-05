import React from 'react';
import GetData from '../getData/getData';
import MyNavbar from '../navbar/navbar';
import {
  Container,
} from 'react-bootstrap';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <MyNavbar />
                <Container>
                    <GetData />
                </Container>
            </Container>
        )
    }
}