import React from 'react';
import { NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
export const Header = (props) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">New expense</NavLink>
        <button onClick={props.startLogout}>Logout</button>
    </header>
);
//we want to render header on all pages
//activeClassName - gives us possibility to apply style to currently clicked link (if we are on this page)
const mapDispatchToProps = (dispatch)=>({
    startLogout: ()=>dispatch(startLogout())
})
export default connect(undefined,mapDispatchToProps)(Header);