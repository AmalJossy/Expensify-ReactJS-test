import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <Link to="/"><h1>Expensify</h1></Link>
        <NavLink to="/" activeClassName="is-active" exact={true} >Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active" >Add Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active" >Help</NavLink>
        <NavLink to="/test" activeClassName="is-active" >Testing</NavLink>
    </header>
);

export default Header;