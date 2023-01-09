import React from 'react';
import { NavLink} from 'react-router-dom';
const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/create" activeClassName="is-active">New expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
);
//we want to render header on all pages
//activeClassName - gives us possibility to apply style to currently clicked link (if we are on this page)

export default Header;