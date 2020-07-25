// Import all components and the api.js to access axios for the API call
import React, { Component } from "react";
import Api from "../utils/Api";
import Table from "./Table";
import Navbar from "./Navbar";

// Functional stateless components (i.e. Navbar & Table) are just plain JS functions, so setState() can't be used
// This is a class component bc "state" has to be set: setState();
class Container extends Component {
    // sdd s State property to update page in the same component where state is kept
    state = {
        result: [],
        //another state:
        search: "",
        //In our Table, currentPage default is set to "":
        currentPage: ""
    }
    // componentDidMount() is invoked immediately after a component is mounted (inserted into the tree)
    componentDidMount() {
        this.searchEmployee()
    }
    searchEmployee = () => {
        //API call to get users
        Api.getUsers()
            .then(res => {
                this.setState({ result: res.data.results })
            })
            .catch(err => console.log(err));
    }
    // function to set the state
    handlePageChange = (page) => {
        this.setState({ currentPage: page })
    };
    
    // Inputs are event driven, get the value of a name to be filtered
    handleInputChange = (event) => {
        // update the state of the page by calling it here
        this.handlePageChange(event.target.value)
    }

    // calling the sortByFirst() function, created in the Table component
    sortByFirst = () => {
        let firstName = this.state.result.sort(compare)
        function compare(a, b) {
            const nameA = a.name.first.toUpperCase();
            const nameB = b.name.first.toUpperCase();
            let comparison = 0;
            if (nameA > nameB) {
                comparison = 1;
            } else if (nameA < nameB) {
                comparison = -1;
            }
            return comparison;
        }
        // set state to be sorted ascending or descending
        this.setState({ result: firstName })
    }
    // calling the sortByLast() function, created in the Table component
    sortByLast = () => {
        let lastName = this.state.result.sort(compare)
        function compare(a, b) {
            const nameA = a.name.last.toUpperCase();
            const nameB = b.name.last.toUpperCase();
            let comparison = 0;
            if (nameA > nameB) {
                comparison = 1;
            } else if (nameA < nameB) {
                comparison = -1;
            }
            return comparison;
        }
        // set state to be sorted ascending or descending
        this.setState({ result: lastName });
    };

    // the render() method is the only required method in a class component.
    // when called, it should examine this.props and this.state and return 
    // React elements, arrays/fragments, portals, string/numbers, booleans/null

    render() {
        if (this.state.result) {
            //returns React element:
            return (
                <div className="container-sm">
                    <Navbar
                        handlePageChange={this.handlePageChange}
                        currentPage={this.state.currentPage}
                        handleInputChange={this.handleInputChange}
                    />
                    <Table
                        results={this.state.result}
                        handlePageChange={this.handlePageChange}
                        currentPage={this.state.currentPage}
                        sortByFirst={this.sortByFirst}
                        sortByLast={this.sortByLast}
                    />
                </div>
            )
        }
        else {
            return <div>No Results</div>
        }
    };

};

export default Container;