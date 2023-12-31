import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; // Import your Home component
import Test from './components/Test'; // Import your Test component
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
    <Router>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
        </Routes>
    </Router>,
    document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
