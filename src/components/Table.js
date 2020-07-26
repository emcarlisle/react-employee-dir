import React from "react";


//Props are used to reference state properties 
//or the functions used to handle them.
//If you need to map over results in state you go props.results.map.Also, props.somehandlefunction 
//refers to a function created.Have a file with state being established and handled beside a state using props
function Table(props) {
    if (props.currentPage === "") {
        return (
            <table className="header table table-striped table-dark">
                {/* COLS  */}
                <thead className="thead-dark">
                    <tr>
                        {/*  Props is referencing a file made in somewhere else in the project. This is how add that function to the DOM.
                        Then you pass it to the component with this.sortbyFirst */}
                        <th scope="col"></th>
                        <th scope="col"><a href="#name" className="alert alert-dark" onClick={() => props.sortByFirst()}>First Name</a></th>
                        <th scope="col"><a href="#name" className="alert alert-dark" onClick={() => props.sortByLast()}>Last Name</a></th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                {/* Data for the body in the table ROWS*/}
                <tbody>
                    {
                        props.results.map(result => (
                            //Keys help React identify which items have changed, are added, or are removed
                            //Key should be specified inside the array
                            <tr key={result.cell}>
                                <th scope="row">
                                    <a href="#singlePage" onClick={() => props.handlePageChange({ result })}>
                                        <img src={result.picture.thumbnail} className="picture" alt="http://placekitten.com/200/300"></img>
                                    </a>
                                </th>
                                <td>{result.name.first}</td>
                                <td>{result.name.last}</td>
                                <td>{result.cell}</td>
                                <td>{result.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        )
        // the props.currentPage is referring to the name being typed in the search input box.
        // so that means if a user types in a name("string") then it will filter the results based on the name typed 
    } else if (typeof props.currentPage === "string") {
        // typeof refers to the datatype. so if the type is string input then run the if block.

        let matches = props.results.filter(result => {
            // The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string.
            // string.substring(start, end), start: the position to start the extraction//end: where to end the extraction
            return (result.name.first + " " + result.name.last).substring(0, props.currentPage.length).toLowerCase() === props.currentPage.toLowerCase();
        })
        return (
            <table className="header table table-striped table-dark">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col"></th>
                        <th scope="col"><a href="#name" className="alert alert-dark" onClick={() => props.sortByFirst()}>First Name</a></th>
                        <th scope="col"><a href="#name" className="alert alert-dark" onClick={() => props.sortByLast()}>Last Name</a></th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                {/* Same table header BUT return this result with this data if a string is returned: */}
                <tbody>
                    {
                        matches.map(result => (
                            <tr key={result.cell}>
                                <th scope="row">
                                    <a href="#singlePage" className="" onClick={() => props.handlePageChange({ result })}>
                                        <img src={result.picture.thumbnail} className="picture" alt="http://placekitten.com/200/300"></img>
                                    </a>
                                </th>
                                <td>{result.name.first}</td>
                                <td>{result.name.last}</td>
                                <td>{result.cell}</td>
                                <td>{result.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        )

    } else {
        // Filter the users by at least one property, img was made clickable in table
        // to render a card with this data:
        return (
            <div className="bg-dark">
                <div className="card mb-3 bg-light">
                    <div className="row no-gutters">
                        <div className="photo col-md-4">
                            <img src={props.currentPage.result.picture.large} className="card-img border border-dark" alt="http://placekitten.com/200/300"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <p className="card-text">First Name: {props.currentPage.result.name.first}</p>
                                <p className="card-text">Last Name: {props.currentPage.result.name.last}</p>
                                <p className="card-text">Phone Number: {props.currentPage.result.cell}</p>
                                <p className="card-text">Email: {props.currentPage.result.email}</p>
                                <p className="card-text">Location: {props.currentPage.result.location.city}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

// export the Table to be imported into the Container component:
export default Table;

