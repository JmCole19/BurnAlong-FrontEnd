import React from 'react';
import { Container } from 'react-bootstrap';

export default class ItemPage extends React.Component {
    render() {
        const value = this.props.list;
        let items = []
        let i;
        let x;

        console.log(value)

        for (x in value){
            items.push(value[x])
            console.log(items)
        }
            
            i = [...items];
            console.log(i)

            return (
                <Container>
                    <Container>
                        <Container>
                            <h1>{i.title}</h1>
                            <em>Written by: {i.author}</em>
                        </Container>
                        <Container>
                            <h3>{i.date}</h3>
                            <p>
                                {i.summary}
                            </p>
                        </Container>
                    </Container>
                </Container>
            )
    }
}
