import React from "react";

export default function Navbar(props) {
    if (typeof props.currentPage === "string") {
        return (
            <nav className="navbar navbar-light bg-light">
                {/* Home button in navbar */}
                <a href="#home" onclick={() => props.handlePageChange("")}>Home</a>
                {/* form for rendered data */}
                <form className="form">
                    <input
                        value={props.currentPage}
                        name="currentPage"
                        // new function: handleInputChange
                        onChange={props.handleInputChange}
                        type="text" placeholder="Search Name" />
                </form>
            </nav>
        )
    }
    else {
        return (
            <nav className="navbar navbar-light bg-light">
                <a href="#home" onclick={() => props.handlePageChange("")}>Home</a>
            </nav>
        )
    }
};