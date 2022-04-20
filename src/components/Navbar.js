import React from 'react'
import { Link } from "react-router-dom";
import FloatingActionButtons from './FloatActionButton';
import TemporaryDrawer from './Drawer';
const Navbar = () => {
    return (
        <div>
          <TemporaryDrawer />
<FloatingActionButtons /> 
        <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link> 
          <Link to="material-ui" className="nav-link">Material Ui</Link>
          <Link to="counter" className="nav-link">Counter</Link>
          <Link to="react-query" className="nav-link">React Query</Link>

          <Link to="/material-ui/input-components" className="nav-link">Input Material Ui</Link>
          <Link to="/material-ui/:componentId" className="nav-link">Switch nested UI</Link>
          <Link to="/material-ui/input-components/submitted-form" className="nav-link">Submitted Form</Link>
          <Link to="/react-query/query2" className="nav-link">Query 2</Link>
          
          <Link to="/test" className="nav-link">Test</Link>
          <Link to="/test/nested-test" className="nav-link">Nested Test</Link>
        </nav>
        </div>
    )
}

export default Navbar


