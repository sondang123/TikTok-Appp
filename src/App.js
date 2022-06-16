import logo from './logo.svg';
import './App.css';
import React from 'react';
// import ReactRouter from './Reactrouter'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRotues } from '~/routes';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRotues.map((route, index) => {
                        const Page = route.Component;
                        return <Route key={index} path={route.path} element={<Page />} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
