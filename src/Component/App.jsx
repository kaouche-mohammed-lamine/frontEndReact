import React , {Component} from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';

import './App.css';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import headerApp from './headerApp';
import bodyApp from './bodyApp';
import footerApp from './footerApp';
class App extends Component{

 render() {
    return ( <Container fluid="true" className="App">

			<headerApp/>
			<bodyApp/>
			<footerApp/>
        </Container> 
    );
}
}

export default App;