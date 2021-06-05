import React from 'react';
import {
    Navbar,
    Form,
    Button,
    FormControl,
    Nav
} from 'react-bootstrap';

export default class MyNavbar extends React.Component {
    render() {
        let items = this.props.list

        const { search } = window.location;
        const query = new URLSearchParams(search).get('s');

        const filterItems = (items, query) => {
            if (!query) {
                return items;
            }
        
            return items.filter((item) => {
                const itemTitle = item.title.toLowerCase();
                return itemTitle.includes(query);
            });
        };
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>BurnAlong Web App</Navbar.Brand>
                <Nav.Link href="/">Home</Nav.Link>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar>
        )
    }
}