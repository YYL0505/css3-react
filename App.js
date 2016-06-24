import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    render() {
        return (
            <div className="appContainer">
                <nav className="main-nav">
                    <header className="main-header">Header</header>
                    <ul>
                        <li><a href="#">Work</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <main className="main-content">Content</main>
                <footer className="main-footer">Footer</footer>
            </div>
        );
    }
}

export default App