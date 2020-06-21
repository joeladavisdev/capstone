import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavigationContainer extends Component {
    render() {
        return (
            <div className="nav-wrapper">
                <ul>
                    <li>
                        <NavLink exact to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="./code-challenges">Code Challenges</NavLink>
                    </li>
                    <li>
                        <NavLink to="./tough-questions-page">Tough Questions</NavLink>
                    </li>
                    <li>
                        <NavLink to="./appearance-tips">Appearance Tips</NavLink>
                    </li>
                    <li>
                        <NavLink to="./prospective-companies">Prospective Companies</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavigationContainer