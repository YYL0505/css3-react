import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    render() {
        return (
            <nav className="main-nav">
                <span>test</span>
                <ul>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        );
    }
}

export default App