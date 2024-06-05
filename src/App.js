import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import MyScans from './components/MyScans';
import './App.scss';
import { useTheme } from './ThemeContext';  // Properly set up ThemeContext

function App() {
     const { toggleTheme, theme } = useTheme(); // Destructuring theme context

    return (
        <Router>
            <div className={`App ${theme}`}>  {/* Apply theme directly to the App container */}
                <Navbar bg={theme === 'dark' ? 'dark' : 'light'} variant={theme} expand="lg">
                    <Navbar.Brand as={Link} to="/">React App</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
                        <Nav.Link as={Link} to="/settings">Settings</Nav.Link>
                        <Nav.Link as={Link} to="/myscans">MyScans</Nav.Link>
                    </Nav>
                    <Button onClick={toggleTheme} variant={theme === 'dark' ? 'secondary' : 'primary'}>
                        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                    </Button>
                </Navbar>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/myscans" element={<MyScans />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
