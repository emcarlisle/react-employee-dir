import React from "react";

//Props are used to reference state properties 
//or the functions used to handle them.
//If you need to map over results in state you go props.results.map.Also, props.somehandlefunction 
//refers to a function created.Have a file with state being established and handled beside a state using props

function Table(props) {
    if (props.currentPage === "") {
        return (
            <table className="header">
                {/* COLS */}
                <thead>
                    <tr>
                        {/*  Props is referencing a file made in somewhere else in the project. This is how add that function to the DOM.
                        Then you pass it to the component with this.sortbyFirst */}
                        <th scope="col"></th>
                        <th scope="col"><a href="name" onClick={() => props.sortByFirst()}>First Name</a></th>
                        <th scope="col"><a href="name" onClick={() => props.sortByLast()}>Last Name</a></th>
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
    }
}