import React from "react";

//Styles
import { HeaderNavLink } from "../../styles/headerStyles";

//NavLinks for Header 
const NavLinks = () => (
  <>
    <HeaderNavLink to="/dashboard" activeClassName="active-link">
      Dashboards
    </HeaderNavLink>
    <HeaderNavLink to="/orders" activeClassName="active-link">
      Orders
    </HeaderNavLink>
    <HeaderNavLink to="/customers" activeClassName="active-link">
      Customers
    </HeaderNavLink>
    <HeaderNavLink to="/inventory" activeClassName="active-link">
      Inventory
    </HeaderNavLink>
    <HeaderNavLink to="/settings" activeClassName="active-link">
      Settings
    </HeaderNavLink>
  </>
);

export default NavLinks;
