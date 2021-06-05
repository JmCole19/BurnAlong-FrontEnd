import React from 'react';
import Table from 'react-bootstrap/Table';

class GetData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    //on Component mount (App startup) this begins the API call
    componentDidMount() {
        //Requesting API information
        fetch("http://code.burnalong.com/items").then(response => {
            if (response.ok) {
                return response.json(); //return information in JSON format
            } else {
                throw new Error("failed to fetch items");
            }
        }).then(jsonData => {
            //This stores key information within state for easier use across the application
            this.setState({
                isLoaded: true,
                items: jsonData,
                list: [] //This is where all of the formatted items will be stored for use on their individual pages
            });
        }).catch(error => {
            this.setState({
                isLoaded: true,
                error
            });
        });
    }

    render() {
        const { error, isLoaded, items, list } = this.state

        if (!isLoaded) {
            return <h1>Loading...</h1>
        } else if (error) {
            return <h1>Failed to fetch data. Error: {error.message}</h1>
        } else {
            let item;

            //This iterates through the returned data (items) and assigns it to the item variable in the form of a rendered <row> tag
            for (const [key, value] of Object.entries(items)) {
                    item = (
                        <tr key={key}>
                            <td>#{key}</td>
                            <td>{value.title}</td>
                            <td>{value.author}</td>
                            <td>{value.date}</td>
                            <td>{value.rating}</td>
                        </tr>
                )
                //pushes all returned items to a list
                list.push(item);
            }

            return (

                //Returns HTML for component
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID #</th>
                            <th>Episode Title</th>
                            <th>Author</th>
                            <th>Date</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* List iteration for all of the items */}
                        {[...list]}
                    </tbody>
                </Table>
            )
        }
    }

}

export default GetData;