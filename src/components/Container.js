{/* Import all components and the api.js to access axios for the API call */ }
import React, { Component } from "react";
import Table from "./Table";
import Navbar from "./Navbar";
import API from "../utils/Api";

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
        API.getUsers()
            .then(res => {
                this.setState({ result: res.data.results })
            })
            .catch(err => console.log(err));
    }
    // function to set the state
    
}